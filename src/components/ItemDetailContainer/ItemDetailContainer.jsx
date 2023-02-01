import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/mockService";
import { cartContext } from "../../storage/cartContext";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  let params = useParams()
  
 const {addToCart} = useContext(cartContext)

/* 
 function handleAddToCart(count){
  addToCart(product)
  console.log(`agregaste al carrito ${count} del producto ${product.nombre}`)
  setQuantityInCart(count)
}
 */
  function handleAddToCart(count) { 
    setIsInCart(true);
    const productAndQuantity = { ...product, count: count };
    addToCart(productAndQuantity );
  }
  
  useEffect(() => {
    getProduct(params.itemid)
      .then((respuesta) => {
        setProduct(respuesta);
      })  
      .catch((error) => alert(error));

  }, []);


  return (
    <ItemDetail
      isInCart={isInCart}
      onAddToCart={handleAddToCart}
      nombre={product.nombre}
      img={product.img}
      desc={product.desc}
      price={product.precio}
    />
  );
}

export default ItemDetailContainer;
