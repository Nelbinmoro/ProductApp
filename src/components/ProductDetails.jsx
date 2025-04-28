import { Table, TableContainer, TableHead, TableRow ,TableCell, TableBody, Button} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
     var[products,setproducts] = useState([]);
     var location = useLocation();
     var navigate = useNavigate();
     console.log("loc",location.state)
      var baseurl = import.meta.env.VITE_API_BASE_URL
      useEffect(()=>{
        axios.get(`${baseurl}/p`)
             .then((res)=>{
              setproducts(res.data)
              console.log(res)
             })
             .catch((err)=>{
              console.log(err)
             })
      },[])
      const updateProduct =(Product)=>{
        console.log(Product)
        navigate('/adm',{state:{Product}})
      }
      const deleteproduct =(id)=>{
        axios.delete(`${baseurl}/p/${id}`)
        .then((res)=>{
            alert(res.data.message)
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
      }
    
      
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <strong>Product Name</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Product Price</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Product Stock</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Actions</strong>
                    </TableCell>
                </TableRow> 
            </TableHead>
            <TableBody>
                {products.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.pname}</TableCell>
                            <TableCell>{val.price}</TableCell>
                            <TableCell>{val.stock}</TableCell>
                            <TableCell>
                                <Button variant='contained' 
                                        onClick={()=>{updateProduct(val)}}
                                >Update</Button>&nbsp;&nbsp;
                                <Button variant='contained' onClick={()=>{
                                    deleteproduct(val._id)
                                }}>Delete</Button>

                            </TableCell>


                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProductDetails

