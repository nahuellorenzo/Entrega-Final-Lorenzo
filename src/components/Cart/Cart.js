import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from 'react-icons/bs'

const Cart = () => {

    const { cart, totalCompra, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

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
        </div>
    )
}

export default Cart