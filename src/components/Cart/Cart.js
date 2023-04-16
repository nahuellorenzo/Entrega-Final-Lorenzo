import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import "./Cart.scss"


const Cart = () => {

  const { cart, totalCompra, eliminarDelCarrito, vaciarCarrito } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div class="container mx-auto my-5 px-4">
        <h2 class="text-2xl font-bold mb-2">No tienes productos agregados</h2>
        <hr class="my-2"/>
          <Link to="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Ir a comprar
          </Link>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <h2 className="text-xl font-bold mb-4">Tu compra</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cart.map((prod) => (
          <div key={prod.id} className="bg-white rounded-lg shadow-md flex">
            <div className="relative w-1/3">
              <div className="aspect-w-3 aspect-h-2 h-full w-full">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="absolute w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="p-4 w-2/3 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold mb-2">{prod.name}</h4>
                <small className="text-gray-500 block mb-2">
                  Precio unitario: ${prod.precio}
                </small>
                <small className="text-gray-500 block mb-2">
                  Cantidad: {prod.cont}
                </small>
                <p className="text-lg font-bold mb-2">
                  Precio Total: ${prod.precio * prod.cont}
                </p>
              </div>
              <button
                onClick={() => eliminarDelCarrito(prod.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <BsFillTrashFill className="mr-2" />
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        ))}

      </div>
      {cart.length > 0 && (
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <h3 className="text-xl font-bold">TOTAL: ${totalCompra().toFixed(2)}</h3>
          <div className="mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={vaciarCarrito}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Vaciar carrito
            </button>
            <Link
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              to="/checkout"
            >
              Terminar mi compra
            </Link>
          </div>
        </div>
      )}
    </div>


  )
}

export default Cart