// src/UserContext.jsx
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export function UserProvider({ children, userData }) {
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export function useUser() {
    return useContext(UserContext);
}
