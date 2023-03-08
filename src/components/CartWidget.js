import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Nav.css"

const CartWidget = () => {
    return (
            <>
            <ShoppingCartIcon /> 
            <span id="numeroCarrito">  
            
            3
            
            </span>
       </>
    )
}

export default CartWidget