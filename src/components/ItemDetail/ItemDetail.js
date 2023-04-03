import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {

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

        console.log(newItem)
    }

    return(
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/6 px-2 mb-8 mr-10 ml-8 md:mr-5 lg:mr-10">
            <h3 className="h-12 text-center">{item.nombre}</h3>
            <div className="flex items-center justify-center">
                <img src={item.img} alt={item.nombre} className="w-auto h-48"></img>
            </div>
            <p className="text-center">${item.precio}</p>
            <p className="text-center">{item.litros}</p>
            <ItemCount
                max={item.stock}
                cont={cont}
                setCont={setCont}
                disabled={disabled}
                setDisabled={setDisabled}
                handleAgregar={handleAgregar}
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleVolver}>Volver</button>
                
        </div>
    )

}