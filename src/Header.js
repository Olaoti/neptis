import React, {useState} from 'react';
import '../src/styles/header.css';
import Logo from './Logo.js'
function Header() {
  const [show, setShow] = useState(false)
  return (
    <div className={`header ${show?('display'):('nodisplay')}`}>
        <div className='nav-bar'>
            <Logo/>
            <div className={`mobile-toggle ${show?('cancel'):('show')}`} onClick={()=>setShow(!show)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={`navs smfont`} >
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
