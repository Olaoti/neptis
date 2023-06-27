import React from 'react';
import { ReactComponent as Logosvg } from "../src/Assets/logo.svg";
import '../src/styles/header.css';
function Logo() {
    return (
        <div className='logo'>
            <Logosvg/>
            <span>NEPTIS</span>
      </div>
    );
  }
  
  export default Logo;
