import React from 'react'
import { useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
const [producto , setProducto] = useState()

const { id } = useParams()

useEffect(() => {
  const detalleProducto = async ()=>{
        try {
        const resp = await fetch ('/data.json')
        const data = await resp.json()
        setTimeout(() => {
          
          setProducto(data.find((item)=> item.id === parseInt(id)))
        }, 2000);  
      }
      catch (error) {
        console.log('Error al obtener el producto: ', error);
      }
      }
      detalleProducto()
      },[id])
     return (
      <> { producto ? <ItemDetail producto={producto} /> : <h1>Cargando ... </h1>} </>
      
  )
}

export default ItemDetailContainer