
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';



const Navbar = () => {
  return (
    <div>
       
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Suiiiiiiiiiiiiiiiiiiiiiiiiii
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none',color:'white'}}>login</Link></Button>
          <Button><Link to={'/sign'} style={{textDecoration:'none',color:'white'}}>signup</Link></Button>
          <Button><Link to={'/adm'} style={{textDecoration:'none',color:'white'}}>admin</Link></Button>
          <Button><Link to={'/p'} style={{textDecoration:'none',color:'white'}}>Products</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
