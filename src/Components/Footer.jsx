import React from 'react'
import  logo from '../assets/assests/Logo.svg'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter} from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
<div className='footer-wrapper'>

<div className='footer-section-one'>
     <div className='footer-logo-container'>
        <img src={logo} alt=" The FOOTER LOGO"/>
     </div>
        <div className='footer-icons'>
            <FaFacebookF/>
            <BsTwitter/>
            <FaLinkedinIn/>
            <FaInstagram/>
            <FaYoutube/>
         </div>
    </div>
    <div className='footer-section-two'>
        <div className='footer-section-column'>
            <span> Quality </span>
            <span> Help </span>
            <span> Share </span>
            <span>Career</span>
            <span>Testimonials </span>
            <span> Work</span>


        </div>
        <p className='footer-copyright-text'> &copy; 2024 Your Company. All rights reserved. </p>
    </div>
</div>
    
  )
};

export default Footer