import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    var[input,setInput] =useState({});
    const inpuHandler =(e)=>{
        // console.log(e.target.value);
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    };
  const addHandler=()=>{
    console.log("Clicked")
  }
  return (
    <div>
      <Box
        sx={{
            marginLeft:40,
            padding:4,
            backgroundColor:"White",
            boarderRadius:2,
            marginTop:5,
            boxShadow:3
        }}>
        <Typography variant='h3' gutterBottom>Welcome To Product Page</Typography>
         <Typography variant='h8'>Please Login To Continue</Typography>
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
        Login
        </Button><br /><br />
        <Typography variant='body2' 
        sx={{ margin:"1rem", color: "text.secondary"}}
        >
        New here?<Link href='/sign' underline="hover" color="primary">Signup Here</Link></Typography>
      </Box>
    </div>
  )
}

export default Login
