import React, {useContext} from 'react';
import {UserContext} from './UserContext'; // Adjust the path as necessary

const UserProfile = () => {
  // Consume context
  const userData = useContext (UserContext);

  if (!userData) {
    return <p>No user data available</p>;
  }

  return (
    <div style={{border: '1px solid gray', padding: '10px', margin: '10px'}}>
      <h2 style={{color: 'blue'}}>{userData.name}</h2>
      <p>
        Age: <span style={{fontWeight: 'bold'}}>{userData.age || 'N/A'}</span>
      </p>
      <p>Bio: {userData.bio || 'No bio available'}</p>
    </div>
  );
};

export default UserProfile;
