
const productos = [
  {
      "id": 1,
      "nombre": "El mejor papa",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 1200,
      "category": "Bandeja",
      "img": "/1.jpg"
  },
  {
      "id": 2,
      "nombre": "Juntos a la par",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 1800,
      "category": "Bandeja",
      "img": "/2.jpg"
  },
  {
      "id": 3,
      "nombre": "Mama tres fotos",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 500,
      "category": "Portaretrato",
      "img": "/3.jpg"
  },
  {
      "id": 4,
      "nombre": "Te amo",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 700,
      "category": "Portaretrato",
      "img": "/4.jpg"
  },
  {
      "id": 5,
      "nombre": "Familia",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 1350,
      "category": "Portaretrato",
      "img": "/5.jpg"
  },
  {
      "id": 6,
      "nombre": "Super mama",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 3500,
      "category": "Bandeja",
      "img": "/6.jpg"
  }
]


const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};



const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const prod = productos.find(el => el.id === parseInt(id))
    setTimeout(() => {
      if (prod){
        resolve(prod);
      }
      else{
        reject("ERROR (el producto que buscaste no existe)")
      }
    }, 500);
  });
}

const getProductByType = (categoryURL) => {
  return new Promise((resolve, reject) => {
    let reqItems = productos.filter((item) => item.category === categoryURL);
    setTimeout(() => {
      if (reqItems){
        resolve(reqItems);
      }
      else{
        reject("ERROR (la categoria filtrada no existe)")
      }
    }, 500);
  });
};


export default obtenerProductos;

export { getProduct, getProductByType };
