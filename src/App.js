import './App.css';
import React from "react"
import NavBar from "../src/components/NavBar"
import ItemListContainer from '../src/components/ItemListContainer';


function App() {
  return (
      <>             
        <NavBar/>
        <ItemListContainer greeting="Gracias, vuelva prontos"/>
    </>
  );
}

export default App;
