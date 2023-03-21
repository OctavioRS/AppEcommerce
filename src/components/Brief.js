import React from "react";
import "./ProductosCart.css";

const Brief = ({ dataShop, dataPrice, id }) => {
  return (
    <div className="brief">
      <h1>Tu compra fue realizada con éxito!</h1>
      <div>
        <u>Los detalles de tu compra son:</u>
        <ul>
          {dataShop.map((item) => (
            <li key={item.id}>
              {item.quantity} u. {item.name}
            </li>
          ))}
        </ul>
        <p>Total: ${dataPrice}</p>
        <p>ID de compra: {id}</p>
      </div>
    </div>
  );
};

export default Brief;
