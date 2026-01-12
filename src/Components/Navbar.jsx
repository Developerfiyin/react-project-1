import React from 'react'
import Logo from '../assets/assests/Logo.svg'
import {HiOutlineBars3} from 'react-icons/hi2'
import { BsCart2} from 'react-icons/bs'
import
 { Box,
     Drawer,
      ListItem, 
      ListItemButton,
       ListItemIcon,
        ListItemText} from '@mui/material'


        import { Home } from '@mui/icons-material'
        import { Info } from '@mui/icons-material'
        import { CommentRounded } from '@mui/icons-material'
        import { PhoneRounded } from '@mui/icons-material'
        import { ShoppingCartRounded } from '@mui/icons-material'


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [menuOption] = [
        {
            text: 'Home', 
            icon: <Home />
        },
        {
            text: 'About', 
            icon: <Info />
        },
        {
            text: 'Contact', 
            icon: <CommentRounded />
        },
        {
            text: 'Phone', 
            icon: <PhoneRounded />
        },
        {
            text: 'Cart', 
            icon: <ShoppingCartRounded />
        }
    ]
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