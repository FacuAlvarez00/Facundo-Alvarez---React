import { useContext } from "react"
import { cartContext } from "../../storage/cartContext"
import Button from "../Button/Button"
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
      
    </div>
{/*     { cart.length <= 0 ? (
    <p>Tu carrito esta vacio</p> 
    ) : (
      <>

      <span>TOTAL ${precioTotal}</span>
      <button disabled={cart.length = 0}>
      Comprar
    </button>
      </>
      
    )
    } */}
   


    </>
    
  )
}

export default Cart
