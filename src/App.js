import './App.css';
import Navbar from './components/NavBar/Navbar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart/Cart"

function App() {

  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/item/:productoId' element={<ItemDetailContainer />} />
          <Route path="/cart" element={ <Cart /> } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
