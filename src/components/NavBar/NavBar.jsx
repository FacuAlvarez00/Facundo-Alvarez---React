

import NavItem from "./NavItem";
import LogoNav from "./LogoNav";
import CartWidget from "./CartWidget";
import "./nav.css"


function NavBar() {
    return (
            <nav>
                <ul>
                    <div className="LogoNav_container">
                        <LogoNav/>
                    </div>
                    <div className="NavItem_container">
                        <NavItem href="/">HOME</NavItem>
                        <NavItem href="/">PRODUCTS</NavItem>
                        <NavItem href="/">ABOUT US</NavItem>         
                    </div>     

                    <div>
                        <CartWidget/>
                    </div>
                </ul>
            </nav>
    )
}



export default NavBar;