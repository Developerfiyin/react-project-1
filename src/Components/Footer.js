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
        <img src={logo} alt=" The FOOTER LOGO" />

     </div>
        
</div>
    </div>
  )
};

export default Footer