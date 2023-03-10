import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "./nav.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header>
    <nav>
    
        <div className="NavItem_container">
          <NavItem href="/">DECOLASER</NavItem>
          <Link to="/category/Portaretrato">Portaretratos</Link>
          <Link to="/category/Bandeja">Bandejas</Link>
          <Link to="/carrito">
            <CartWidget/>
          </Link>

        </div>

    </nav>
  </header>
  );
}

export default NavBar;
