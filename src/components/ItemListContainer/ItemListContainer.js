import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import  ItemList  from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


export const ItemListContainer = ( {greeting} ) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryName } = useParams()

    console.log(categoryName)

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryName
                    ? query(productosRef, where("category", "==", categoryName))
                    : productosRef
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                }) 
                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })

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