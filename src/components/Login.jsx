import { Box, Button, Link, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
    var[input,setInput] =useState({});
    var baseurl = import.meta.env.VITE_API_BASE_URL
    var navigate =useNavigate();
    const inpuHandler =(e)=>{
        // console.log(e.target.value);
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    };
  const addHandler=()=>{
 
    axios
    .post(`${baseurl}/api/login`,input)
    .then((res)=>{
      console.log(res.data)
      sessionStorage.setItem("role",res.data.user.role)
      if(res.status===200){
      alert(res.data.message)
    if(res.data.user.role=='admin'){
      navigate('/adm')
    }else{
      navigate('/p')
    }
  }
    })
    .catch((err)=>{
      console.log(err)
    })
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
