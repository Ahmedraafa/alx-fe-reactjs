// src/components/Navbar.jsx
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar () {
  return (
    <nav
      style={{
        display: 'flex', // استخدام Flexbox لتنسيق العناصر
        justifyContent: 'space-around', // توزيع العناصر مع وجود مسافة متساوية بينها
        padding: '10px', // إضافة مسافة حول شريط التنقل
        backgroundColor: '#f4f4f4', // تحديد لون خلفية شريط التنقل
      }}
    >
      <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
      <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>
        About
      </Link>
      <Link to="/services" style={{textDecoration: 'none', color: 'black'}}>
        Services
      </Link>
      <Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
