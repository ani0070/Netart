// Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="assets/logo.png" alt="Company Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
