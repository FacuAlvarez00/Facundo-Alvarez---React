import { createContext, useEffect, useState } from "react"
import ItemCounter from "../components/ItemCounter/ItemCounter";

export const cartContext = createContext({ cart: []})



function CartProvider(props){
    const [cart, setCart] = useState([])
    
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() =>{
        cartTotal()
    }, [cart])


   
    const test = () => console.log("test");

 


    function addToCart(item){

        let alreadyInCart = cart.find(itemId => itemId.id === item.id)
        let copyCart = [...cart]

        if (alreadyInCart){
            setCart(copyCart.map((currentItem) => currentItem.id === item.id ?
            {...alreadyInCart, count: alreadyInCart.count + item.count}: currentItem)
            )}
            
        else{
            copyCart.push(item)
            setCart(copyCart)
        }
    cartTotal()
}

function cartTotal() {
    if (cart.length <= 0) {
        setPrecioTotal(0);
    } else {
        let total = cart.reduce((acc, el) => acc + el.precio * el.count, 0);
        setPrecioTotal(total);
        
    }
}




function removeFromCart(itemId){
    setCart(cart.filter(item => item.id !== itemId));
    cartTotal();


}




    return (
        <cartContext.Provider value={{cart, addToCart, test, precioTotal, removeFromCart }}>
            {props.children}
        </cartContext.Provider>
    )



  
}



export {CartProvider}