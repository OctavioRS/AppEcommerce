import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Nav.css";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart, ProductNumber } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <ShoppingCartIcon />
      ) : (
        <>
          <ShoppingCartIcon />
          <span id="numeroCarrito">{ProductNumber()}</span>
        </>
      )}
    </>
  );
};

export default CartWidget;
