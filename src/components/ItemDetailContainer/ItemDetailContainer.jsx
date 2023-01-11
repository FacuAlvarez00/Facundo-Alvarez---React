import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let params = useParams()
  console.log(params)

  console.log("%cRenderizando ItemDetailContainer", "background-color: red");

  useEffect(() => {
    getProduct(params.itemid)
      .then((respuesta) => {
        setProduct(respuesta);
        /* console.log("respuesta", respuesta) */
      })  
      .catch((error) => alert(error));

  }, []);


  return (
    <ItemDetail
      nombre={product.nombre}
      img={product.img}
      desc={product.desc}
      price={product.precio}
    
    />
  );
}

export default ItemDetailContainer;
