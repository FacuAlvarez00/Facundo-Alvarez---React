import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./homepage.css";

function HomePage(){
    return (
        <div>
            <h1 className="title_homepage">¡Bienvenido a DECOLASER!</h1>
            <ItemListContainer/>
        </div>
    )
}

export default HomePage