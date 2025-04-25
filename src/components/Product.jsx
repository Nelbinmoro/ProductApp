import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Product = () => {
  var[products, setproducts] = useState([])
  var baseurl = import.meta.env.VITE_API_BASE_URL
  // GET API 
  useEffect(() => {
    axios.get(`${baseurl}/p`) 
      .then(res=> {
        setproducts(res.data)
        console.log(res)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
      })
  }, [])
  return (
    <div>
            {/* <Typography variant='h1' sx={{color:'black'}}>hi</Typography> */}
            <Grid  container spacing={2}>
        {products.map((val,i)=>{
            return(
                <Grid size={{xs:12,md:3}}>
                <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component='img'
                  height={200}
                  image={`http://localhost:2999/uploads/${val.images[0]}`}
                  alt={val.pname}
                />
                <CardContent>
                  <Typography>{val.pname}</Typography>
                  <Typography>{val.price}</Typography>
                  <Typography>{val.discription}</Typography>
                  <Typography>{val.stock}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' color='green' size="small">Share</Button>
                  <Button variant='contained' color='green' size="small">Learn More</Button>
                </CardActions>
              </Card>
              </Grid>

            )
        })}
  
  </Grid>

    </div>
  )
}

export default Product
