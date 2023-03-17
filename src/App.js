import './App.css';
import Navbar from './components/NavBar/Navbar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/item/:productoId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
