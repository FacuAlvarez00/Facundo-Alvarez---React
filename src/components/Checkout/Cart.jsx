import { useContext } from "react"
import { cartContext } from "../../storage/cartContext"
import CartItem from "./CartItem"
import React from 'react'


const Cart = () => {
 const {cart, precioTotal} = useContext(cartContext)







 
  return (
    <>
    <div>
        {cart.map((item) => {
            return (
              <CartItem 
              id={item.id}
              img={item.img}
              title={item.nombre} 
              desc={item.desc}
              price={item.precio}
              quantity={item.count}
              />
            )
        })}
    </div>
    <div>
      <span>TOTAL ${precioTotal}</span>
    </div>


    </>
    
  )
}

export default Cart
