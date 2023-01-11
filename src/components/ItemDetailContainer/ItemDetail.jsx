import React from "react";
import Button from "../Button/Button";


function ItemDetail({ nombre, img, price, desc }) {
  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{nombre}</h2>
      </div>
      <div className="item-card_img">
        <img src={img} />
      </div>
      
      <div className="item-card_detail">
        <h3 className="item-card_price">$ {price}</h3>
        <small>{desc}</small>
      </div>
      <br></br>
      <Button padding="10px" color="purple">
        Comprar
      </Button>
    </div>
    
  );
}

export default ItemDetail;
