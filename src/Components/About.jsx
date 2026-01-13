import React from 'react'
import bannerBackground from '../assets/assests/about-background-image.png'
import AboutImage from '../assets/assests/about-background.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'


const About = () => {
  return (
    <section className='about-section-container'>
     
     <div className="about-background-image-container"> 
       <img src={AboutImage} alt="About image" />
     </div>

        <div className='about-section-image-container'>
            <img src={bannerBackground} alt="ABOUT BANNER BACKGROUND Image" />
        </div>

<div className="about-section-text-container">
            <h2>About </h2>
            <p>Food is an important part of diet.</p>
        </div>

    </section>
  )
}

export default About