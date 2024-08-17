import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age="30" bio="A software developer from San Francisco." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
