import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import { UserProvider } from './UserContext'; // تأكد من المسار الصحيح

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}>
      <Header />
      <UserProfile />
      <Counter />
      <MainContent />
      <Footer />
    </UserProvider>
  );
}

export default App;
