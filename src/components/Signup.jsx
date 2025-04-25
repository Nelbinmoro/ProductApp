import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    var[input,setInput] =useState({});
    var baseurl = import.meta.env.VITE_API_BASE_URL
    var navigate =useNavigate();
    const inpuHandler =(e)=>{
        // console.log(e.target.value);
        setInput({...input,[e.target.name]:e.target.value})
        console.log("in",input)
    };
  const addHandler=()=>{
    console.log("Clicked");
    axios.post(`${baseurl}/api`,input)
    .then((res)=>{
      console.log(res)
      alert(res.data.message);
      navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <Box
        sx={{
            marginLeft:35,
            padding:4,
            backgroundColor:"White",
            boarderRadius:2,
            marginTop:5,
            boxShadow:3
        }}>
        <Typography variant='h4' gutterBottom>Signup Form</Typography>  
        <TextField 
        fullWidth
        label='Fullname'
        variant='outlined'
        margin='normal'
        name='fname'
        
        onChange={inpuHandler}>
        </TextField>

        <TextField 
        fullWidth
        label='Email'
        variant='outlined'
        margin='normal'
        name='ename'
       
        onChange={inpuHandler}
        >
        </TextField>

        <TextField 
        fullWidth
        label='Password'
        variant='outlined'
        margin='normal'
        name='password'
       
        onChange={inpuHandler}>
        </TextField>
        
        
        <Button  
        onClick={addHandler}
        fullWidth 
        variant="contained"
        color='primary'>
        Sign Up
        </Button><br /><br />
       <Typography variant='h6'>Already a user?<Link to={'/'}>Login </Link></Typography>
      </Box>
    </div>
  )
}

export default Signup
