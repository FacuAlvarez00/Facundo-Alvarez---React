
const productos = [
  {
      "id": 1,
      "nombre": "Papa te amo",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 1200,
      "category": "Cuadro",
      "img": "/1.png"
  },
  {
      "id": 2,
      "nombre": "Super mama",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 1800,
      "category": "Cuadro",
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
      "nombre": "Abuelos",
      "cantidad": 1,
      "desc": "Lorem ipsum dolor sit amet consectetur",
      "precio": 3500,
      "category": "Cuadro",
      "img": "/6.jpg"
  }
]


const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
      console.log("test1", productos)
    }, 2000);
  });
};



const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const prod = productos.find(el => el.id === parseInt(id))
    setTimeout(() => {
      if (prod){
        resolve(prod);
        console.log("test2", prod)
      }
      else{
        reject("ERROR")
      }
    }, 2000);
  });
}

const getProductByType = (categoryURL) => {
  return new Promise((resolve, reject) => {
    let reqItems = productos.filter((item) => item.category === categoryURL);

    setTimeout(() => {
      resolve(reqItems);
      console.log("test1",reqItems)
    }, 2000);
  });
};


export default obtenerProductos;

export { getProduct, getProductByType };
