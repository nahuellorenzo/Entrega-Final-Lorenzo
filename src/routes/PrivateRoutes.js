import Navbar from '../components/NavBar/Navbar.js';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from "../components/Cart/Cart"
import { Routes, Route, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
            {/* RUTAS PRIVADAS */}
            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path='/category/:categoryName' element={ <ItemListContainer /> }/>
                <Route path='/item/:productoId' element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> } />
                <Route path="*" element={ <Navigate to="/" /> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes