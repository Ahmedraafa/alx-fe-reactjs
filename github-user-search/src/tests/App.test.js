import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter (axios);

describe ('GitHub User Search Application', () => {
  beforeEach (() => {
    mock.reset ();
  });

  test ('should call GitHub API and display user data on successful search', async () => {
    const mockUserData = {
      login: 'octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      name: 'The Octocat',
      bio: 'A sample GitHub user',
      html_url: 'https://github.com/octocat',
    };

    mock
      .onGet ('https://api.github.com/users/octocat')
      .reply (200, mockUserData);

    render (<App />);

    fireEvent.change (screen.getByPlaceholderText (/enter github username/i), {
      target: {value: 'octocat'},
    });
    fireEvent.click (screen.getByText (/search/i));

    expect (screen.getByText (/loading/i)).toBeInTheDocument ();

    await waitFor (() => {
      expect (screen.getByText ('The Octocat')).toBeInTheDocument ();
      expect (screen.getByText ('A sample GitHub user')).toBeInTheDocument ();
      expect (screen.getByRole ('img')).toHaveAttribute (
        'src',
        mockUserData.avatar_url
      );
      expect (screen.getByText (/view github profile/i)).toHaveAttribute (
        'href',
        mockUserData.html_url
      );
    });
  });

  test ('should display error message when user not found', async () => {
    mock.onGet ('https://api.github.com/users/unknownuser').reply (404);

    render (<App />);

    fireEvent.change (screen.getByPlaceholderText (/enter github username/i), {
      target: {value: 'unknownuser'},
    });
    fireEvent.click (screen.getByText (/search/i));

    expect (screen.getByText (/loading/i)).toBeInTheDocument ();

    await waitFor (() => {
      expect (
        screen.getByText (/looks like we can’t find the user/i)
      ).toBeInTheDocument ();
    });
  });
});
