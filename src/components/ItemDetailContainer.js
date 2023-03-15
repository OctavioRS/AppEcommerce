import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "./../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();

  const { id } = useParams();

  useEffect(() => {
    const collectionDetail = collection(db, "products");
    const refDoc = doc(collectionDetail, id);

    getDoc(refDoc).then((data) => {
      const detail = { id: data.id, ...data.data() };
      setProducto(detail);
    });
  }, [id]);
  return (
    <>
      
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <h1>Cargando ... </h1>
      )}
    </>
  );
};

export default ItemDetailContainer;
