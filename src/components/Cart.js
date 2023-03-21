import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductosCart.css";
import { db } from "./../firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import Form from "./Form";
import Brief from "./Brief";

const Cart = () => {
  const { cart, removeItem, TotalPrice } = useContext(CartContext);
  const [sellId, setSellId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBrief, setShowBrief] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSubmit = () => {
    const sellCollection = collection(db, "sells");
    addDoc(sellCollection, {
      datos: userData,
      items: cart,
      total: TotalPrice(),
      time: serverTimestamp(),
    }).then((result) => {
      const resultID = result.id;
      setSellId(resultID);
      handlerStock();
      setIsSubmitted(true);
    });
  };

  const handlerStock = () => {
    cart.forEach((prod) => {
      const referenceStock = doc(db, "products", prod.id);
      const newStock = prod.unidades - prod.quantity;
      updateDoc(referenceStock, {
        unidades: newStock,
      });
    });
  };

  const handleConfirm = (data) => {
    setUserData(data);
  };

  const handleFinalizarCompra = () => {
    handleSubmit();
    setShowBrief(true);
  };

  return (
    <>
      {cart.length === 0 ? (
        <p className="sinProductos">
          {" "}
          No hay productos en el carrito. Elija sus productos
          <Link to="/" className="aca">
            presionando aquí.
          </Link>
        </p>
      ) : (
        <>
          {!isSubmitted && (
            <>
              <div className="formatoCarrito">
                {cart.map((prod) => {
                  return (
                    <h2 key={prod.id} className="productos">
                      {prod.quantity} {prod.name} ${prod.precio}
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
              <Form onConfirm={handleConfirm} />
              <button
                onClick={handleFinalizarCompra}
                className="finalizar-compra"
              >
                Finalizar compra
              </button>
            </>
          )}
          {isSubmitted && showBrief && (
            <Brief dataShop={cart} dataPrice={TotalPrice()} id={sellId} />
          )}
        </>
      )}
    </>
  );
};

export default Cart;
