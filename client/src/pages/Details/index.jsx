import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const [product,setProduct]=useState([]);
    const {id}=useParams()
    useEffect(()=>{
        const data = async() =>{
            const response=await axios.get(`http://localhost:3000/api/son/${id}`)
            setProduct(response.data)
        }
        data()
    },[])
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img}></img>
    </div>
  )
}

export default Details
