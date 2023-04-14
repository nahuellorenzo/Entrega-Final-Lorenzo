import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"


const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // validaciones
        if (values.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }
        if (values.direccion.length < 3) {
            alert("Direccion inválido")
            return
        }
        if (values.email.length < 5) {
            alert("Email inválido")
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, precio: prod.precio, cont: prod.cont, nombre: prod.nombre })),
            total: totalCompra(),
            fecha: new Date()
        }

        const productosRef = collection(db, 'productos')

        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
                .then((doc) => {
                    if (doc.data().stock >= item.stock) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cont
                        })
                    } else {
                        alert("No hay stock de " + item.nombre)
                    }
                })

        })

        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
    }

    if (orderId) {
        return (
            <div className="container mx-auto my-5">
                <h2>Tu orden se registró con éxito!</h2>
                <hr />
                <p>Guarda tu número de orden: {orderId}</p>
                <div style={{ marginTop: '15px' }}>
                    <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" to="/">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container mx-auto my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder='Tu nombre'
                    className="border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
                    name="nombre"
                />
                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder='Direccion'
                    className="border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
                    name="direccion"
                />
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    placeholder='Tu Email'
                    className="border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
                    name="email"
                />

                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout