import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px auto', width: '300px', textAlign: 'center' }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: '100px', borderRadius: '50%' }} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    html_url: PropTypes.string,
  }).isRequired,
};

export default UserCard;
