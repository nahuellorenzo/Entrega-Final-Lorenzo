import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import  ItemList  from '../ItemList/ItemList'


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
                    : <ItemList items={productos}/>
            }
        </div>
    )
}