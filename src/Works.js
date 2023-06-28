import React from 'react';
import intro from "../src/Assets/intro.png"
import '../src/styles/works.css';
function Works() {
    const works = [
        {
            id:0,
            heading:'AI-Powered Website Generation',
            content:'Create stunning and functional websites effortlessly with our AI-powered website generation feature, which seamlessly transforms web designs into fully operational sites.',
        },
        {
            id:1,
            heading:'Customizable Design Elements',
            content:'Customize every aspect of your website with ease using our wide range of design elements, ensuring a unique and personalized online presence.',
        },
        {
            id:2,
            heading:'User-Friendly Interface',
            content:'Creating a website has never been easier. Our user-friendly interface ensures a seamless and intuitive website building experience.',
        },
    ]
    return (
        <div className='works'>
            <h3 className='center'>How it Works</h3>
            <div className='works_content'>
                <div className='works_information'>
                    {works.map(work=>{
                        return(
                            <div className='card' key={work.id}>
                                <div className='discs'>
                                    <div className='circ'>
                                    </div>
                                    <div className='line'>
                                    </div>
                                </div>
                                <div className='card_texts'>
                                    <h4>{work.heading}</h4>
                                    <p>{work.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='works_content_img'>
                    <img src={intro} alt='About us'/>
                </div>
            </div>
        </div>
    );
}

export default Works;