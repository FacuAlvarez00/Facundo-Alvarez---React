import { Link } from "react-router-dom";

function Error404(){
    return(
        <div>
            <p>Pagina no encontrada, volver a <Link to="/">Inicio</Link></p>
        </div>
    )


}

export default Error404