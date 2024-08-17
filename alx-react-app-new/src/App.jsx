// src/App.jsx
import React from 'react';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile.jsx';
import Counter from './components/Counter.jsx';
import { UserProvider } from './UserContext.jsx';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}>
      <div>
        <Header />
        <UserProfile />
        <Counter />
        <MainContent />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
