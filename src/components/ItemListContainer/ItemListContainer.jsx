import { useState, useEffect } from "react";

import Item from "./Item";
import Flex from "../Flex/Flex";
import obtenerProductos, { getProductByType } from "../../services/mockService";
import { useParams } from "react-router-dom";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  let { categoryid } = useParams();

  useEffect(() => {
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setProducts(respuesta);
        })
        .catch((error) => alert(error));
    } else {
      getProductByType(categoryid).then((respuesta) => {
        setProducts(respuesta);
      });
    }
  }, [categoryid]);


  return (

  
    
    <Flex>
      {products.map((itemIterado) => <Item key={itemIterado.id} item={itemIterado}/>
      )}
    </Flex>
   
  );
}


export default ItemListContainer;
