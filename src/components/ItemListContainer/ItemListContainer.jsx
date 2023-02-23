import { useState, useEffect } from "react";

import Item from "./Item";
import Flex from "../Flex/Flex";
import { getProducts, getProductByType } from "../../services/firebase";
import { useParams } from "react-router-dom";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  let { categoryid } = useParams();

  console.log("categoryid", categoryid)

  useEffect(() => {
    if (!categoryid) {
      getProducts()
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
