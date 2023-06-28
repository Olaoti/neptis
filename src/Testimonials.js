import React from 'react';
import '../src/styles/testimonials.css';
import persona from "../src/Assets/persona.png"
function Testimonials() {
  return (
    <div className='testimonials'>
        <div className='background'>
            <div className='bg1'></div>
            <div className='bg2'></div>
        </div>
        <div className='box'>
            <h3 className='center'>Testimonials</h3>
            <div className='testimonials_content center'>
                <h4 className='review center'>
                    Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem commodo turpis ipsum. Et tristique arcu arcu sed feugiat tempus purus nullam gravida. Vitae gravida dui gravida amet vitae. Malesuada quisque accumsan quis cursus enim. Commodo in sit platea eget lobortis. Suspendisse nulla leo eget fringilla justo ultrices. Vestibulum sed mi donec maecenas sit nisi. Etiam tincidunt ultrices sit sit sociis rutrum dui. Fames nunc quam ullamcorper cursus. Diam vitae euismod curabitur ullamcorper.
                </h4>
                <div className='person_info'>
                    <img src={persona} alt='Persona face'/>
                    <div className='details'>
                        <div className='smfont name'>
                            Kayla Jamer
                        </div>
                        <p>Head of Noin Group</p>
                    </div>
                </div>
            </div>
            <div className='arrows center'>
                <div className='leftarrow'></div>
                <div className='rightarrow'></div>
            </div>
        </div>
        
    </div>
    );
}
export default Testimonials;