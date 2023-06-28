import React from 'react';
import "../src/styles/intro.css"
import intro from "../src/Assets/intro.png"
function Intro() {
  return (
    <div className="intro">
        <div className='intro_content'>
          <div className='center'>
              <h1>Transform Your Images into Stunning Websites with Neptis</h1>
              <p className='smfont'>Harness the power of AI to turn your website designs into reality</p>
              <button className='btn'>
                  Get started</button>
          </div>
          <img className='img' src={intro} alt='This is for the introduction of the website'/>
        </div>
    </div>
  );
}

export default Intro;