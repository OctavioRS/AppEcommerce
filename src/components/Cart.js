import React , { useContext } from 'react'
import { CartContext } from '../context/CartContext'

import './ProductosCart.css'

const Cart = () => {
  const { cart , removeItem, TotalPrice } = useContext(CartContext)

  return (
  <div>
     {cart.map ((prod) => {

      return <h2 key={prod.id} className="productos"> {prod.quantity} {prod.name} $:{prod.quantity * prod.precio} <span className='boton-eliminar' onClick={()=>removeItem(prod.id)}> ❌ </span> </h2>
     }
     )}

    <p> Precio total:  ${TotalPrice()} </p>
   </div>
    )
 }

export default Cart