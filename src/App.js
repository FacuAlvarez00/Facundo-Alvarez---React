import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Error404 from "./components/Error404/Error404";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          
          <Route path="/detail/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Error404/>}/>
            
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
