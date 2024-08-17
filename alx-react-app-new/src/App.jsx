import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age="30" bio="A software developer from San Francisco." />
       <Counter />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
