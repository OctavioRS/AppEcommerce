import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [BotonPresionado, setBotonPresionado] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    setBotonPresionado(true);
    addItem(producto, count);
  };
  return (
    <>
      <div className="detail">
        <h2>Detalle de: {producto.name}</h2>
        <p>Descripcion: {producto.descripcion}</p>
        <p>Medida: {producto.medida}</p>
        <p>Unidades: {producto.unidades}</p>
        <p>Precio: {producto.precio}</p>
        <img src={producto.img} alt={producto.name} />
      </div>

      {BotonPresionado ? (
        <Link to="/Cart">
          <button> Finalizar compra </button>
        </Link>
      ) : (
        <ItemCount onAdd={onAdd} stock={5} />
      )}
    </>
  );
};
export default ItemDetail;
