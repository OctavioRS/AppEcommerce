import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

const Item = ({ prod })=> {
  return (
    <div className='card'>
      <h2> {prod.name}  </h2>
      <img src={prod.img} alt={prod.name} />
      <p>$ {prod.precio}</p>
      <Link to={`/item/${prod.id}`}> 
      <p className='botonDetalle'>Ver detalle </p>
      </Link>
    </div>
  )
}

export default Item