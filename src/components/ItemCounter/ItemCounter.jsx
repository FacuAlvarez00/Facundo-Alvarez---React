import { useState } from "react"
import Button from "../Button/Button"
import ItemCounterCart from "./ItemCounterCart"


function ItemCounter({onAddToCart}){

    const[amount, setAmount] = useState(1)


    function incrementCount(){
        setAmount(amount + 1)
        }

    function decrementCount(){
        setAmount(amount - 1) 
        }


    return(
        <div>
            <p>Agrega la cantidad que deseas</p>
            <ItemCounterCart
                    amount={amount}
                    incrementCount={incrementCount}
                    decrementCount={decrementCount}
            />

            <div>
                <Button onClick={() => onAddToCart(amount)}>Agregar al carrito</Button>
            </div>

        </div>
    )
}

export default ItemCounter