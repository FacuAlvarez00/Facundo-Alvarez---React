import { createContext, useContext } from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cartContext } from '../../storage/cartContext'

function CartWidget(){

    const contexto = useContext(cartContext)
    
    return (
        <>  
            <div className="icon_container">
                <span>
                    <FontAwesomeIcon className="cartWidget_icon" icon={faCartShopping}/>
                </span>
            </div>
            <div className="cartWidget_number">
                <span>{contexto.cart.length}</span>
            </div>
        </>
    )
}

export default CartWidget