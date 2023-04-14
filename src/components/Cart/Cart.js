import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, totalCompra, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No tienes productos agregados</h2>
                <hr/>
                <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.name}</h4>
                        <img src={prod.img} alt={prod.name}/>
                        <small>Precio unitario: ${prod.precio} </small>
                        <small>Cantidad: {prod.cont}</small>
                        <p>Precio Total: ${prod.precio * prod.cont}</p>
                        <button 
                            onClick={() => eliminarDelCarrito(prod.id) } 
                            className="btn btn-danger"
                        >
                            <BsFillTrashFill/>
                        </button>
                        <hr/>
                    </div>
                ))
            }
            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
            <Link className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart