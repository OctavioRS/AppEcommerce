import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
  return (
    <>
      {producto && (
        <>
        <div className='detail'>
          <h2>Detalle de: {producto.name}</h2>
          <p>Descripcion: {producto.descripcion}</p>
          <p>Medida: {producto.medida}</p>
          <p>Unidades: {producto.unidades}</p>
          <p>Precio: {producto.precio}</p>
          <img src={producto.img} alt={producto.name} />
        </div>
        </>
      )}
    </>
  );
};
export default ItemDetail
