import { useState } from "react"
import Button from "../Button/Button"






function ItemCounter({onAddToCart}){

    const[count, setCount] = useState(1)


    

    function incrementCount(){
        setCount(count + 1)
        }

    function decrementCount(){
        setCount(count - 1) 
        }


    

    return(
        <div>
            <p>Agrega la cantidad que deseas</p>
            <button disabled={count <= 1} onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button disabled={count >= 8} onClick={incrementCount}>+</button>

            <div>
               {<Button onAdd={() => onAddToCart(count)}>Agregar al carrito</Button>}
            </div>
        </div>
    )
}

export default ItemCounter