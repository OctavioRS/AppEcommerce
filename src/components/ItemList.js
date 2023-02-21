import React from 'react'
import Item from './Item'


const ItemList = ({ products }) => {
  return (
    <>
    <div className='card-container'>
    {products.map((prod)=> {
    return <Item key={prod.id} prod={prod}/>
})}
    </div>
    </>
  )
}

export default ItemList