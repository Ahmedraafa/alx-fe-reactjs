// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#e0f7fa',
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '20px',
    }}>
      <h1 style={{ color: '#00796b' }}>Main Content</h1>
      <p style={{ color: '#004d40', fontSize: '18px' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </div>
  );
};

export default MainContent;
