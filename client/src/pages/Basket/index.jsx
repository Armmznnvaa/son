import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BasketItemContext } from '../../context/BasketItemContext';
import axios from 'axios';

const Basket = () => {

    const { basketItem, plusBasket, minusBasket,setBasketItem } = useContext(BasketItemContext);
    const deleteitem=async(item)=>{
      axios.delete(`http://localhost:3000/api/son/${item._id}`)
      setBasketItem(basketItem.filter((x)=>x._id !== item._id))

    }
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">topla</TableCell>
            <TableCell align="left">cix</TableCell>
            <TableCell align="left">total</TableCell>
            <TableCell align="left">dlete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {console.log('Basket Item:', basketItem)}
          {basketItem.map((item,idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">
                <button onClick={()=>{
                    plusBasket(item)
                }}>
                    +
                </button>
              </TableCell>
              <TableCell align="left">
                <button onClick={()=>{
                    minusBasket(item)
                }}>
                    -
                </button>
              </TableCell>
              <TableCell align="left">
               {item.quantity*item.price}
              </TableCell>
              <TableCell align="left">
              <buton onClick={()=>{
                deleteitem(item)
              }}>
                delete
              </buton>
              </TableCell>

         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Basket
