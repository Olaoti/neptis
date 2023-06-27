import React from 'react';
import '../src/styles/features.css';
function Features() {
    const featuresInfo =[
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
        {
            id:3,
            heading:'Responsive Website Outputs',
            content:"Our platform automatically adapts your website's design and layout to different screen sizes, providing optimal viewing experiences on desktops, laptops, tablets, and smartphones.",
        },
    ]
    return (
      <div className="features">
            <h3 className='center'>Amazing Features for You</h3>
            <div className='features_card'>
                {featuresInfo.map(feature=>{
                    return(
                    <div className='card' key={feature.id}>
                        <h4 className='card_heading'>
                        {feature.heading}
                        </h4>
                        <p className='card_content'>
                        {feature.content}
                        </p>
                    </div>
                    )
                })}
            </div>
      </div>
  );
}

export default Features;
