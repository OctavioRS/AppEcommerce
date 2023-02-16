import React from "react";
import "./Nav.css"
import CartWidget from "./CartWidget"


const NavBar = () => {
    return (
       <nav>
        <h1 className="logo">Ferreteria LA TUERCA </h1> 
        <div className="anchors">
          <a href="#"> INICIO</a>
          <a href="#"> PRODUCTOS</a>
          <a href="#"> CONTACTO </a>
          <CartWidget/>
        </div>
       </nav> 
    )
}

export default NavBar