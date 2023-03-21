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
      <div className="content-detail">
        <img src={producto.img} alt={producto.name} />
        <div className="detail">
          <h2>{producto.name}</h2>
          <p>
            {" "}
            <u>Descripcion:</u> {producto.descripcion}
          </p>
          <p>Medida: {producto.medida}</p>
          <p>Unidades: {producto.unidades}</p>
          <p>Precio: $ {producto.precio}</p>
        </div>
      </div>
      {BotonPresionado ? (
        <Link to="/Cart">
          <button className="ir-al-carrito"> Ir al carrito </button>
        </Link>
      ) : (
        <ItemCount onAdd={onAdd} stock={producto.unidades} />
      )}
    </>
  );
};
export default ItemDetail;
