// src/components/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
    return (
        <div style={styles.profilePage}>
            <UserInfo />
        </div>
    );
}

const styles = {
    profilePage: {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#333', // Darker text color for better visibility
    },
};

export default ProfilePage;
