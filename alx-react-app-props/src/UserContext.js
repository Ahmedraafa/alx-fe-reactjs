// src/UserContext.js
import React, { createContext, useContext } from 'react';

import PropTypes from 'prop-types';

// Create a Context
const UserContext = createContext();


// Provider component
export function UserProvider({ children, userData }) {
    return ( <
        UserContext.Provider value = { userData } > { children } <
        /UserContext.Provider>
    );
}

// Prop validation for UserProvider
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

// Custom hook to use UserContext
export function useUser() {
    return useContext(UserContext);
}