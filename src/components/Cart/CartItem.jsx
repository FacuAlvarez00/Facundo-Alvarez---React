import { useContext } from "react"
import { cartContext } from "../../storage/cartContext"
import "./cart.css"
import React from 'react'


const CartItem = ({img, title, quantity, price, desc, id}) => {

    const {removeFromCart} = useContext(cartContext)

    return (
        <div className="product">
            <img className="product__image" src={img} />
            <div className="product__info">
                <div className="titleAndRemove">
                    <h2 className="product__title">{title}</h2>
                    <div>
                        <span onClick={() => removeFromCart(id)} className="remove_item">X</span> 
                    </div>  
                </div> 
                <p className="product__description">{desc}</p>
                <h2 className="product__quantity">Cantidad: {quantity}</h2>
                <h3 className="product__price">$ {price * quantity}</h3>
                <div className="button_wrapper">
                </div>

                

            </div>

            
        </div>
    )
}
export default CartItem

