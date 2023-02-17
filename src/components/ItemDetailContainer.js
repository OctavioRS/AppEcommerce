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
        catch {
          
        }
      }
      detalleProducto()
      },[])
     return (
      <>
        <ItemDetail detalle={producto}/>

      </>
  )
}

export default ItemDetailContainer