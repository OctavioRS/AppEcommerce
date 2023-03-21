import React from "react";
import "./main.css";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "products");
    const q = id
      ? query(productCollection, where("categoria", "==", id))
      : productCollection;

    getDocs(q)
      .then((data) => {
        const list = data.docs.map((products) => {
          return {
            ...products.data(),
            id: products.id,
          };
        });
        setProducts(list);
      })
      .catch(() => {
        console.log("Error al obtener el producto: ");
      });
  }, [id]);

  return (
    <>
      {products.length > 0 ? (
        <>
        <div className="greeting">
          <p>{greeting}</p>
        </div>
        <ItemList products={products} />
        </>
      ) : (
        <h1>Cargando ...</h1>
      )}
    </>
  );
  
};

export default ItemListContainer;
