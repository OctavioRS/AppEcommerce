import React, { useState } from "react";
import "./count.css";

function ItemCount({ stock, onAdd }) {
  const [contador, setContador] = useState(0);
  const aumentarStock = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirStock = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    } else {
      setContador(contador);
    }
  };

  const agregarCarrito = () => {
    setContador(contador);
    onAdd(contador);
  };

  return (
    <>
      <div id="card">
        <div id="cantidad">
          <span id="disminuir" onClick={disminuirStock}>
            -
          </span>
          <p>{contador} </p>
          <span id="aumentar" onClick={aumentarStock}>
            +
          </span>
        </div>
        <button className="botonAgregar" onClick={agregarCarrito}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}

export default ItemCount;
