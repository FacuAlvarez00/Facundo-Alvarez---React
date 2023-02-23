
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_xhkJRHo4I7m8PViciE2tyNMopyd1GiA",
  authDomain: "facundo-alvarez---react.firebaseapp.com",
  projectId: "facundo-alvarez---react",
  storageBucket: "facundo-alvarez---react.appspot.com",
  messagingSenderId: "880273644341",
  appId: "1:880273644341:web:12d62d8b1e28d3886d0a7c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function getProducts(){
    const productsRef = collection(db, "products")
    const snapshot = await getDocs(productsRef)

        const products = snapshot.docs.map((item) => {
            let product = item.data()
            product.id = item.id
            return product
        })
        return(products)
}

export async function getProduct(idParams){
    const productsRef = collection(db, "products")
    const docRef = doc(productsRef, idParams)
    const snapshot = await getDoc(docRef)
    return { ...snapshot.data(), id: snapshot.id }
}

export async function getProductByType(categoryURL){
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", categoryURL))

    const snapshot = await getDocs(q)

    const products = snapshot.docs.map((item) => {
        let product = item.data()
        product.id = item.id
        return product
    })
    return products
}

export async function createOrder(order) {
    const orderRef = collection(db, "order");

    let respuesta = await addDoc(orderRef, order);
    console.log(respuesta, respuesta.id);
  
    return respuesta.id;
}


export async function exportProducts(){


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

  for (let item of productos){
    delete(item.id)
    addDoc ( collection(db, "products"), item)
  }
  
}




export default db


