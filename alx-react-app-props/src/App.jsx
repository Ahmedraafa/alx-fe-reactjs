// src/App.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './UserContext';

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <UserProvider userData={userData}>
            <div style={styles.appContainer}>
                <ProfilePage />
            </div>
        </UserProvider>
    );
}

const styles = {
    appContainer: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
    },
};

export default App;
