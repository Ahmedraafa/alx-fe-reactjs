import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      setError('');
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch {
      setUser(null);
      setError('User not found.');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
      <UserCard user={user} />
    </div>
  );
};

export default App;
