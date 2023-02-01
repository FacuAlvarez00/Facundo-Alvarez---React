import React from "react";

import Button from "../Button/Button";
import "./cardDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";




function ItemDetail({ nombre, img, price, desc, onAddToCart, isInCart }) {


  const {count, AddToCart} = useContext(cartContext)
  



  return (

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
          <div>{}</div>



          {isInCart ? (

            <Link to="/carrito">
              <Button padding="10px" color="purple">
                Ir al carrito
              </Button>
            </Link>


          ) : (
            <>
              <ItemCounter onAddToCart={onAddToCart} />
              {/* <Button onAdd={() => onAddToCart(count)}>Agregar al carrito</Button> */}
            </>
          )}


        </div>
      </div>
    </div>


  );
}

export default ItemDetail;
