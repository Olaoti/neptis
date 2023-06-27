import React from 'react';
import { ReactComponent as Logosvg } from "../src/Assets/logo.svg";
import '../src/styles/header.css';
function Logo() {
    return (
      <div className="Logo">
          <div className='logo'>
              <Logosvg/>
          </div>
      </div>
    );
  }
  
  export default Logo;
