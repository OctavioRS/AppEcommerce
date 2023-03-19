import React from 'react';

const Brief = ({ dataShop, dataPrice, id }) => {
  return (
    <div>
      <h1>Tu compra fue realizada con éxito!</h1>
      <div>
        Los detalles de tu compra son:
        <ul>
          {dataShop.map((item) => (
            <li key={item.id}>
              {item.quantity} {item.name}
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
