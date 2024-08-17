// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '10px',
      backgroundColor: '#00796b',
      color: 'white',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      borderTop: '2px solid #004d40',
    }}>
      <p style={{ margin: 0 }}>© 2024 My React App</p>
    </footer>
  );
};

export default Footer;
