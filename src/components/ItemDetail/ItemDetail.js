import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ItemDetail = ({item}) => {

    const navigate = useNavigate()
    const [cont, setCont] = useState(1)
    const [disabled, setDisabled] = useState(true)

    const handleVolver = () => {
        navigate(-1)
    }

    const handleContador = () => {
        setCont( cont + 1 )
        if (Number (cont) === 1)
        {
            setDisabled(false)
        }
    }

    const hanldeRestar = () => {
        setCont ( cont - 1 )
        if (Number (cont) === 2)
        {
            setDisabled(true)
        }
    }

    return(
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/6 px-2 mb-8 mr-10 ml-8 md:mr-5 lg:mr-10">
            <h3 className="h-12 text-center">{item.nombre}</h3>
            <div className="flex items-center justify-center">
                <img src={item.img} alt={item.nombre} className="w-auto h-48"></img>
            </div>
            <p className="text-center">${item.precio}</p>
            <p className="text-center">{item.litros}</p>
            <div className="flex items-center justify-center mb-2">
                <button className="border border-solid border-black text-xl py-1 px-1 rounded" onClick={hanldeRestar} disabled={disabled}>-</button>
                <p className='text-xl'>{cont}</p>
                <button className="border border-solid border-black text-xl py-1 px-1 rounded" onClick={handleContador}>+</button>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleVolver}>Volver</button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button>
            </div>
        </div>
    )

}