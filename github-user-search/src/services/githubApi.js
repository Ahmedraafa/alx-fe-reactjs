import axios from 'axios';

const githubApi = axios.create ({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

export const fetchUser = username => githubApi.get (`/users/${username}`);
