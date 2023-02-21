import React from "react";
import "./main.css"
import ItemList from "./ItemList";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {
const [products , setProducts] = useState([])
const { id } = useParams()

useEffect(() => {
  const traerProductos = async ()=>{
    try {
    const resp = await fetch ('/data.json')
    const data = await resp.json()
    setTimeout(() => {
      setProducts(id ? data.filter((e) => e.categoria === id ) : data);
    }, 2000)
  }
    catch (error) {
      console.log('Error al obtener el producto: ', error);
    }
  }
    traerProductos()
  },[id])


    return (
      <>
        <div className="greeting">
            <p>{greeting}</p>
        </div>
      
        <ItemList products={products}/>
       
       </>
    )
}

export default ItemListContainer


