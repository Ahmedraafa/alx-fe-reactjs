import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  bio: PropTypes.string
};

UserProfile.defaultProps = {
  bio: 'No bio available'
};

export default UserProfile;
