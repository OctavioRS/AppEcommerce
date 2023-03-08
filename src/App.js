import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Los mejores productos al mejor precio" />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer greeting="Los mejores productos al mejor precio" />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
