import React from 'react'

const ItemDetail = ({ producto }) => {
  const productos = producto.find(producto => producto.id === Number(1))

  return (
    <div>
      <h2>{productos.name}</h2>
      <p>Medida: {productos.medida}</p>
      <p>Unidades: {productos.unidades}</p>
      <p>Precio: {productos.precio}</p>
      <img src={productos.img} alt={productos.name} />
    </div>
  )
}

export default ItemDetail
