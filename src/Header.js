import React from 'react';
import '../src/styles/header.css';
import Logo from './Logo.js'
function Header() {
  return (
    <div className="header">
        <div className='logo'>
            <Logo/>
        </div>
    </div>
  );
}

export default Header;
