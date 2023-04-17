import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState(null)
    const { productoId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", productoId)
        getDoc(docRef)
            .then((doc) => {
                console.log(doc.id)
                console.log(doc.data())
                setProducto({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))

    },[productoId])

    return(
        <div className="containerList">
            {
                loading
                    ? <Loader/>
                    : <ItemDetail item={producto}/>
            }
        </div>
    )
}