// src/UserContext.js
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// Create a Context for the user data
const UserContext = createContext(null);

// Define the UserProvider component
export function UserProvider({ children, userData }) {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}

// Define prop types for UserProvider
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

// Custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}
