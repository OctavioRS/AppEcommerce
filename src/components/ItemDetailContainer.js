import React from 'react'
import { useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const [producto , setProducto] = useState([])

useEffect(() => {
  const detalleProducto = async ()=>{
        try {
        const resp = await fetch ('/data.json')
        const data = await resp.json()
        setProducto (data)
      }
        catch (error) {
          console.log('Error al obtener el producto: ', error);
        }
      }
      detalleProducto()
      },[])
     return (
      <>
        <ItemDetail producto={producto}/>

      </>
  )
}

export default ItemDetailContainer