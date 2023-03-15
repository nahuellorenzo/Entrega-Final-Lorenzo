import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'


export const ItemListContainer = ( {greeting} ) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        pedirDatos()
            .then((response) => {
                setProductos(response)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    })

    return(
        <div className="containerList">
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <div><h2 className='h2__containerList'>{greeting}</h2><hr></hr>
                        { productos.map((producto) => {
                            return (
                            <div key={producto.id}>
                                <h3>{producto.nombre}</h3>
                                <img src={producto.img} alt={producto.nombre}></img>
                                <p>{producto.precio}</p>
                            </div>)
                        }) }
                    </div>
            }
        </div>
    )
}