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
            <h2 className='primary-subheading'>About </h2>
            <h1 className='primary-heading'>Food is an important part of diet.</h1>

            <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

    </section>
  )
}

export default About