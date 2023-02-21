import './App.css';
import React from "react"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemCount from '../src/components/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer";
import  Cart  from './components/Cart';
import { BrowserRouter , Routes , Route} from "react-router-dom"

const onAdd = (i)=>{
  console.log(i)

}
function App() {
  return (
      <BrowserRouter>             
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Los mejores productos al mejor precio"/>}/>
            <Route path='/category/:id' element={<ItemListContainer greeting="Los mejores productos al mejor precio"/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<Cart/>}/>
          </Routes>
        <ItemCount onAdd={onAdd} stock={5} />
      </BrowserRouter>
  );
}

export default App;


