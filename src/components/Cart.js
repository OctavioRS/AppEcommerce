import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductosCart.css";
import { db } from "./../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Form from "./Form";


const Cart = () => {
  const { cart, removeItem, TotalPrice } = useContext(CartContext);
  const [sellId, setSellId] = useState("")

  const clientData = (data) => {
    return( {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email
    })
   
  }

  const lastStep = () => {
    const sellCollection = collection(db, "sells");
    addDoc(sellCollection, {
      datos: clientData(),
      items: cart,
      total: TotalPrice(),
      time: serverTimestamp(),
    })
    .then ((result) => {const resultID = result.id 
    setSellId(resultID);})
  };

  

  return (
    <>
   
      {cart.length === 0 ? (
        <p>
          {" "}
          No hay productos en el carrito. Elija sus productos
          <Link to="/" className="aca">
            presionando aquí
          </Link>
        </p>
      ) : (
        <>
          <div className="formatoCarrito">
            {cart.map((prod) => {
              return (
                <h2 key={prod.id} className="productos">
                  {prod.quantity} {prod.name} $:{prod.quantity * prod.precio}
                  <span
                    className="boton-eliminar"
                    onClick={() => removeItem(prod.id)}
                  >
                    ❌
                  </span>
                </h2>
              );
            })}
            <p> Precio total: ${TotalPrice()} </p>
            
          </div>
          <Form data={clientData}/>
        <button onClick={lastStep}> Comprar </button>
        {sellId && <p>Su id de compra es {sellId}</p>}
          
        </>
      )}
    </>
  );
};

export default Cart;
