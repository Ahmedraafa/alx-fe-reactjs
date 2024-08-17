// src/components/UserProfile.jsx
import React from 'react';
import { useUser } from '../UserContext.jsx';

function UserProfile() {
  const { name, email } = useUser();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserProfile;
