import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { cartContext } from '../../storage/cartContext'
import Button from '../Button/Button'


function CartItemCounter() {
    const[count, setCount] = useState()
  



    function incrementCount(){
        setCount(count + 1)
        }

    function decrementCount(){
        setCount(count - 1) 
        }


    

    return(
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button disabled={count >= 8} onClick={incrementCount}>+</button>
        </div>
    )
}

export default CartItemCounter
