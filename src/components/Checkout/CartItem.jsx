import { useContext } from "react"
import { cartContext } from "../../storage/cartContext"
import ItemCounter from "../ItemCounter/ItemCounter"
import Button from "../Button/Button"



import "./cartitem.css"

import React from 'react'
import ItemCounterCart from "../ItemCounter/ItemCounterCart"

const CartItem = (props) => {

    const {onAddToCart, count} = useContext(cartContext)



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


                <ItemCounter/>

                <Button onAdd={() => onAddToCart(count)}>Agregar al carrito</Button>
            


            </div>
        </div>



    )
}

export default CartItem


{/*       <div>
                <span onClick={() => removeFromCart(item.id)} className="remove_item">X</span>
            </div> */}