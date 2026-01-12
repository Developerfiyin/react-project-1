import React from 'react'
import Logo from '../assets/assests/Logo.svg'
import {HiOutlineBars3} from 'react-icons/hi2'
import { BsCart2} from 'react-icons/bs'
import
 { Box,
     Drawer,
     List,
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
    const [openMenu, setOpenMenu] = React.useState(false);


    const menuOptions = [
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
        <nav className="nav">
            <div className="nav-logo-container">
                <img src={Logo} alt=" " />
            </div>

            <div className='navbar-links-container'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#phone">Phone</a>
                <a href="#cart">Cart</a> 
                <a href="">
                <BsCart2 className='navbar-cart-icon'/></a>
              <button className='primary-button'>Booking Now</button>
            </div>

            <div className='menu-container'> 
   <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
      <Box 
        sx={{width: 250}}
        role='presentation'
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        > 
         
        <List>
            {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    
          </Box>
        </Drawer>

            </div>
        </nav>  
    </div>
  )
}

export default Navbar