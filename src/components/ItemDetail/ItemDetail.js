import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import LowStockMsg from "./LowStockMsg"

export const ItemDetail = ({item}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(true)
    const [cont, setCont] = useState(1)

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cont
        }

        agregarAlCarrito(newItem)
    }

    return(

        <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/6 px-2 mb-8 mr-10 ml-8 md:mr-5 lg:mr-10">
        <h3 class="text-2xl font-bold text-center mb-2">{item.nombre}</h3>
        <div class="flex items-center justify-center">
          <img src={item.img} alt={item.nombre} class="w-auto h-48 rounded-lg shadow-md"></img>
        </div>
        <p class="text-xl font-bold text-center mt-2">${item.precio}</p>
        <p class="text-center text-gray-500">{item.litros}</p>
        { item.stock <= 5 && <LowStockMsg stock={item.stock} />}
        {
          isInCart(item.id)
            ? <Link to="/cart" className="block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-center mt-4 transition duration-300">Terminar mi compra</Link>
            : <ItemCount
                max={item.stock}
                cont={cont}
                setCont={setCont}
                disabled={disabled}
                setDisabled={setDisabled}
                handleAgregar={handleAgregar}
                class="mt-4"
              />
        }
        <button class="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center mt-4 transition duration-300" onClick={handleVolver}>Volver</button>
      </div>
      
    )

}