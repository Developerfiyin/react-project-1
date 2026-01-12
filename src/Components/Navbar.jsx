import React from 'react'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="nav-logo-container">
                <img src={Logo} alt="Logo" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar