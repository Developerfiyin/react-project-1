import React from 'react'
import Logo from '../assets/assests/Logo.svg'
import {HiOutlineBars3} from 'react-icons/hi2'
import { BsCart2} from 'react-icons/bs'
import { Box, Drawer, ListItem, ListItemButton, } from '@mui/material'
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