import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { pedirDatosPorId } from "../../helpers/pedirDatos";

export const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState(null)
    const { productoId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatosPorId( Number(productoId) )
            .then((response) => {
                setProducto(response)
            })
            .catch((error) => { console.log(error) })
            .finally(() => { setLoading(false) })
    },[productoId])

    return(
        <div className="containerList">
            {
                loading
                    ? <h3>Cargando...</h3>
                    : <ItemDetail item={producto}/>
            }
        </div>
    )
}