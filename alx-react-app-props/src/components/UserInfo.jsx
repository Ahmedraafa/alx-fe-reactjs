// src/components/UserInfo.jsx
import React from 'react';
import { useUser } from '../UserContext';

function UserInfo() {
    const userData = useUser();

    return (
        <div style={styles.userInfo}>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

const styles = {
    userInfo: {
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
        color: '#333', // Darker text color for better visibility
    },
};

export default UserInfo;
