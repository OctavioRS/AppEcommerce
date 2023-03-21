import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const TotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);
  };

  const ProductNumber = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, TotalPrice, ProductNumber }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
