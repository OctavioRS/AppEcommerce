import './App.css';
import React from "react"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemCount from '../src/components/ItemCount';

const onAdd = (i)=>{
  console.log(i)

}
function App() {
  return (
      <>             
        <NavBar/>
        <ItemListContainer greeting="Los mejores productos al mejor precio"/>
        <ItemCount onAdd={onAdd} stock={5} />
        
    </>
  );
}

export default App;
