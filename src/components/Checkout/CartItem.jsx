import { useContext } from "react"
import { cartContext } from "../../storage/cartContext"
import "./cartitem.css"
import React from 'react'
import CartItemCounter from "./CartItemCounter"
import { useState } from "react"



const CartItem = (props) => {

    const {removeFromCart, cart} = useContext(cartContext)
    const[count, setCount] = useState(1)
   



    function incrementCount(){
        setCount(count + 1)
        }

    function decrementCount(){
        setCount(count - 1) 
        }



    return (
        <div className="product">

            <img className="product__image" src={props.img} />


            <div className="product__info">

                <h2 className="product__title">{props.title}</h2>

                <h2 className="product__quantity">{props.quantity}</h2>

                <h3 className="product__price">$ {props.price}</h3>

                <p className="product__description">{props.desc}</p>
                

                <div className="button_wrapper">

                </div>

                <div>
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button disabled={count >= 8} onClick={incrementCount}>+</button>
                </div>

        

                <div>
                    <span onClick={() => removeFromCart(props.id)} className="remove_item">X</span> 
                </div> 
            </div>

            
        </div>
    )
}
export default CartItem

