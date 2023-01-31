import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Error404 from "./components/Error404/Error404";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartProvider } from "./storage/cartContext";
import Cart from "./components/Checkout/Cart";



function App() {
  return (
    <>
    <CartProvider>

      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          
          <Route path="/detail/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Error404/>}/>
          <Route path="carrito" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>

    </CartProvider>
      
    </>
  );
}

export default App;
