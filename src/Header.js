import React from 'react';
import '../src/styles/header.css';
import Logo from './Logo.js'
function Header() {
  return (
    <div className="header">
        <div className='nav-bar'>
            <Logo/>
            <div className='mobile-toggle'></div>
        </div>
        <div className='navs'>
            <div className='nav-item'>Home</div>
            <div className='nav-item'>Features</div>
            <div className='nav-item'>How it works</div>
            <div className='nav-item'>Pricing</div>
            <div className='nav-item'><button className='btn cl_main'>Get started</button></div>
        </div>
    </div>
  );
}

export default Header;
