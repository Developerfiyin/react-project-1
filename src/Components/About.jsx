import React from 'react'
import bannerBackground from '../assets/assests/about-banner-background.png'
import AboutImage from '../assets/assests/about-background.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'


const About = () => {
  return (
    <section className='about-section-container'>
     
     <div className="about-image-container"> 
       <img src={AboutImage} alt="About image" />
     </div>


    </section>
  )
}

export default About