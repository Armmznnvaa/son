import React, { createContext, useContext, useEffect, useState } from 'react'

export const BasketItemContext=createContext([])
const BasketItemContextProvider = ({children}) => {
    const [basketItem,setBasketItem]=useState(
        JSON.parse(localStorage.getItem("basketItem"))
        ? JSON.parse(localStorage.getItem("basketItem")):[]
    )
const addBasket=async(product)=>{
    console.log("product",product)
    const current=basketItem.find((x)=>x._id === product._id )
    if (current) {
        current.quantity++;
        setBasketItem([...basketItem])
    }
    else{
        setBasketItem([...basketItem,{...product,quantity:1}])
    }
}
const plusBasket=async(item)=>{
    const udapteData=basketItem.find((x)=>x._id === item._id )
    if (udapteData) {
        udapteData.quantity++;
        setBasketItem([...basketItem])
        return
    }
    setBasketItem(udapteData)
}
const minusBasket=async(item)=>{
    if (item.quantity>1) {
        const udapteData=basketItem.find((x)=>x._id === item._id )
        if (udapteData) {
            udapteData.quantity--;
            setBasketItem([...basketItem])
            return
        }
      
    }
    setBasketItem(udapteData)
}
useEffect(()=>{
    localStorage.setItem("basketItem",JSON.stringify(basketItem));
},[basketItem])

  return (

     <BasketItemContext.Provider
     value={{
        addBasket,basketItem,setBasketItem,plusBasket,minusBasket
     }}
     >
      {children}
     </BasketItemContext.Provider>
    
  )
}

export default BasketItemContextProvider