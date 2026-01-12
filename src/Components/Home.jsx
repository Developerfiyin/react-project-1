import React from 'react'
import Navbar from './Navbar'
import bannerBackground from '../assets/assests/home-banner-background.png'
import BannerImage from '../assets/assests/home-banner-image.png'
import { BsArrowBarRight } from 'react-icons/bs'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>
        
        <div className='home-bannerImage-container'>
          <img src={bannerBackground} alt="THE BANNER BACKGROUND Image" />
        </div>

         <div className=''>

         </div>

         </div> 
    </div>
  ) 
}

export default Home