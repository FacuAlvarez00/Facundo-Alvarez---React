import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <NavItem href="/">DECOLASER</NavItem>
        <Link to="/category/Portaretrato">Portaretratos</Link>
        <Link to="/category/Cuadro">Cuadros</Link>
        <NavItem href="/carrito">
          <span>🛒</span>
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
