import React from 'react'
import Item from './Item'


const ItemList = ({ products }) => {
  return (
    <>
    {products.map((prod)=> {
    return <Item key={prod.id} prod={prod}/>
    
})}

    </>
  )
}

export default ItemList