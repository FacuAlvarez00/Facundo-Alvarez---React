import { createContext, useEffect, useState } from "react"

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
            /* console.log("ya se encuentra en el carrito") */
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


/*     function addToCart(item){
        let alreadyInCart = cart.find(cartItem => cartItem.id === item.id)
        let copyCart = [...cart]
    
        if (alreadyInCart){
            console.log("ya se encuentra en el carrito")
            setCart(copyCart.map((cartItem) => cartItem.id === alreadyInCart.id ?
            {...alreadyInCart, count: alreadyInCart.count + item.count}: cartItem)
            )}
        else{
            item.count = item.count || 1;
            copyCart.push(item)
            setCart(copyCart)
        }
        console.log(item.count)
    }
     */


        /* function cartTotal() {
        if (cart.length <= 0){
            console.log("carrito vacio")
        }
        else{
            let precio_total = cart.reduce((acc, el) => acc + el.precio * el.count, 0)
            return `${precio_total}`;
        }
        console.log(cart.length)
    }
 */

  
}



export {CartProvider}