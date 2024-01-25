
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketItemContext } from '../../context/BasketItemContext'


const Navbar = () => {
    const {basketItem}=useContext(BasketItemContext)
  
  return (
   <>
   <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/Add">Add</Link>
    </li>
    <li>
        <Link to="/Basket">Basket <span>{basketItem.length}</span></Link>
    </li>
    <li>
        <Link to="/Wishlist">Wishlist</Link>
    </li>
  
   </ul>
   </>
  )
}

export default Navbar
