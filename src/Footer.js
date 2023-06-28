import React from 'react';
import '../src/styles/footer.css';
import Logo from './Logo.js'
import { ReactComponent as Facebook} from '../src/Assets/facebook.svg';
import { ReactComponent as Twitter} from '../src/Assets/twitter.svg';
import { ReactComponent as Linkedin} from '../src/Assets/linkedin.svg';

function Footer() {
  return (
    <div className='footer'>
        <Logo/>
        <div className='navs smfont'>
            <div className='nav-item'>Home</div>
            <div className='nav-item'>Features</div>
            <div className='nav-item'>How it works</div>
            <div className='nav-item'>Pricing</div>
        </div>
        <div className='socials'>
            <Twitter/>
            <Facebook/>
            <Linkedin/>
        </div>
    </div>
    );
}

export default Footer;