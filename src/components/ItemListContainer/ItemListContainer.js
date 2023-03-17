import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { pedirDatos, pedirDatosPorCategory } from '../../helpers/pedirDatos'
import  ItemList  from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = ( {greeting} ) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryName } = useParams()

    console.log(categoryName)

    useEffect(() => {

        if (!categoryName){
            setLoading(true)
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
        }
        else{
            setLoading(true)
            pedirDatosPorCategory(categoryName)
                .then((response) => {
                    setProductos(response)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        }, [categoryName])

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