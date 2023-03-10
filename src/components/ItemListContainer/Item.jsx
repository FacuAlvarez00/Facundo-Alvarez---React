

import { Link } from "react-router-dom";

import Button from "../Button/Button";
import "./card.css";

function Item(props) {
  const { nombre, img, precio, id } = props.item;


  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{nombre}</h2>
      </div>
      <div className="item-card_img">
        <img src={img} />
      </div>
      <div className="item-card_detail">
        <h3 className="item-card_price">$ {precio}</h3>

      </div>
      <Link to={`/detail/${id}`}>
      <Button padding="10px" color="brown">
        Ver más
      </Button>
      </Link>
      <br></br>
    </div>
    
  );

  
}




export default Item;
