
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';



const Navbar = () => {
  const [role,setRole] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const savedRole = sessionStorage.getItem('role');
    setRole(savedRole);
  },[])
  const handleLogout = ()=>{
    sessionStorage.clear();
    navigate('/')
  }
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
            
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none',color:'white'}}>login</Link></Button>
          <Button><Link to={'/sign'} style={{textDecoration:'none',color:'white'}}>signup</Link></Button>
         {role==="admin" && (
           <Button><Link to={'/adm'} style={{textDecoration:'none',color:'white'}}>admin</Link></Button>
         )}
          <Button><Link to={'/p'} style={{textDecoration:'none',color:'white'}}>Products</Link></Button>
          {role && (
            <Button onClick={handleLogout} color='inherit'>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
