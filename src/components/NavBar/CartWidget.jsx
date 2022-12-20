import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(){
    return (
        <>  
            <div className="icon_container">
                <FontAwesomeIcon className="cartWidget_icon" icon={faCartShopping}/>
            </div>
            <div className="cartWidget_number">
                <p>0</p>
            </div>
        </>
    )
}

export default Icon