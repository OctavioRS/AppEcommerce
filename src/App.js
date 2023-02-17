import './App.css';
import React from "react"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemCount from '../src/components/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer";

const onAdd = (i)=>{
  console.log(i)

}
function App() {
  return (
      <>             
        <NavBar/>
        <ItemListContainer greeting="Los mejores productos al mejor precio"/>
        <ItemDetailContainer/>
        <ItemCount onAdd={onAdd} stock={5} />
        
    </>
  );
}

export default App;
