import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Nav.css"
import { CartContext } from "../context/CartContext";


const CartWidget = () => {

    const { ProductNumber } = useContext(CartContext);

    return (
            <>
            <ShoppingCartIcon /> 
            <span id="numeroCarrito">  
            
           {ProductNumber()}
            
            </span>
       </>
    )
}

export default CartWidget