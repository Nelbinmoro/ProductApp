// import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import  axios  from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  var baseurl = import.meta.env.VITE_API_BASE_URL
  
  var navigate =useNavigate();
  const [productData, setInput] = useState({
    pname: '',
    price: '',
    discription: '',
    stock: '',
    images:[],
    available: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setInput((prev) => ({ ...prev, available: !prev.available }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', productData);
    // TODO: Add your API call here
  };


  const submitHandler = ()=>{
    const formData = new FormData();
    formData.append("pname",productData.pname);
    formData.append("price",productData.price);
    formData.append("stock",productData.stock);
    formData.append("discription",productData.discription);
    productData.images.forEach((file)=>{
      formData.append("images",file)
    })
    axios.post(`${baseurl}/p`,formData)
    .then((res)=>{
      console.log(res) 
      navigate('/p')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: 'auto',
        padding: 4,
        backgroundColor: '#fdfdfd',
        borderRadius: 3,
        marginTop: 8,
        boxShadow: 4,
        marginLeft:50,
        marginRight:50
      }}
    >
      <Typography variant='h4' gutterBottom align='center'>
        <b>Add Product</b>
      </Typography>

      <Grid onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label='Product Name'
          variant='outlined'
          margin='normal'
          name='pname'
          value={productData.pname}
          onChange={handleChange}
          required
        /></Grid>

        <Grid><TextField
          fullWidth
          label='Price'
          type='number'
          variant='outlined'
          margin='normal'
          name='price'
          value={productData.price}
       
          onChange={handleChange}
          required
        /></Grid>

        <Grid><TextField
          fullWidth
          label='Discription'
          variant='outlined'
          margin='normal'
          name='discription'
          value={productData.description}
          onChange={handleChange}
          multiline
          rows={3}
        /></Grid>

        <Grid><TextField
          fullWidth
          label='Stock'
          type='number'
          variant='outlined'
          margin='normal'
          name='stock'
          value={productData.stock}
          onChange={handleChange}
          required
        /></Grid>
        
        
        <Grid >
         <Button
         variant="outlined" size="small" component="label">
          upload image
          <input
          type="file"
          hidden 
          multiple 
          accept="image/*"
          onChange={(e)=>{
            setInput({...productData,
              images:Array.from(e.target.files)
            })
          }}
          />
        </Button></Grid>

        {/* <Grid><FormControlLabel
          control={
            <Switch
              checked={input.available}
              onChange={handleToggle}
              color='warning'
            />
          }
          label='Available'
          sx={{ color: 'black', mt: 1 }}
        /></Grid> */}

        <Grid><Button 
        onClick={submitHandler}
          fullWidth
          type='submit'
          variant='contained'
          color='secondary'
          sx={{ mt: 3 }}
        >
          Submit
        </Button></Grid>
      
    </Box>
  );
};

export default Admin;
