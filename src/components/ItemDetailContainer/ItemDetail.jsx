import React from "react";
import Button from "../Button/Button";
import "./cardDetail.css";


function ItemDetail({ nombre, img, price, desc }) {
  return (
    <>
    <div className="item-card_detailWrapper">

      <div className="item-card_image">
        <img src={img} />
      </div>

      
      
      <div className="item-card_description">

      <div className="item-card_title">
        <h2>{nombre}</h2>
        
      </div>
        <h3 className="item-card_cost">$ {price}</h3>
        <small>{desc}</small>
        <div className="button_wrapper">
      <Button padding="10px" color="purple">
     Comprar
    </Button>
   </div>
      </div>
    </div>
   </>
    
  );
}

export default ItemDetail;
