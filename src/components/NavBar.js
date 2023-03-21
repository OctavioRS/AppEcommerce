import React from "react";
import "./Nav.css"
import CartWidget from "./CartWidget"
import NavCategories from "./NavCategories";
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
       <nav>
        <Link className="logo" to={"/"}>Ferretería LA TUERCA </Link> 
        <div className="anchors">
         <NavCategories/>
        <Link to={"/Cart"}> <CartWidget/> </Link> 
        </div>
       </nav> 
    )
}

export default NavBar