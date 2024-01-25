import React, { useContext, useEffect, useState, } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BasketItemContext } from '../../context/BasketItemContext';


const Home = () => {
     const [product,setProduct]=useState([])
    const {addBasket}=useContext(BasketItemContext)
    useEffect(()=>{
        const data=async()=>{
            const response=await axios.get("http://localhost:3000/api/son")
            setProduct(response.data)
        }
        data()
    },[])
  return (
    <div>
      <div className="container">
        <div className="row">
      {product.map((item,idx)=>(
        <div className="col-xl-4"key={idx}>
          <img style={{width:"100%"}} src={item.img}></img>
          <h1>
            <Link to={`/Details/${item._id}`}>{item.name}</Link>
            
          </h1>
          <p>{item.price}</p>
          <button onClick={()=>{
             addBasket(item)
          }} >
            card
          </button>
          
        </div>
      ))}
        </div>
      </div>

    </div>
  )
}

export default Home
