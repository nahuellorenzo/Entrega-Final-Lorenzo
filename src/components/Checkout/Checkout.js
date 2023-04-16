import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { LoginContext } from "../../context/LoginContext"
import { Link } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, query, where, addDoc, writeBatch, documentId, getDocs } from "firebase/firestore"
import { Formik } from 'formik'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(4, 'Mínimo 4 caracteres')
                .max(30, 'Máximo 30 caracteres'),
    direccion: Yup.string()
                .required('Este campo es obligatorio')
                .min(6, 'Mínimo 6 caracteres')
                .max(30, 'Máximo 30 caracteres'),
    email: Yup.string()
                .email('El email es inválido')
                .required('Este campo es obligatorio')
})


const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const { user } = useContext(LoginContext)

    const [orderId, setOrderId] = useState(null)
    
    const generarOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, precio: prod.precio, cont: prod.cont, nombre: prod.nombre })),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')

        const productosRef = collection(db, 'productos')

        const outOfStock = []

        const itemsRef = query(productosRef, where( documentId(), 'in', cart.map(prod => prod.id) ))
        const response = await getDocs(itemsRef)

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)

            if (doc.data().stock >= item.cont) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cont
                })
            } else {
                outOfStock.push(item)
            }

        })

        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordersRef, orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
                })
        } else {
            alert("Hay items sin stock")
        }
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

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: user.email
                }}
                validationSchema={schema}
                onSubmit={generarOrden}
            >
                {( {values, errors, handleChange, handleSubmit, isSubmitting} ) => (
                    <form onSubmit={handleSubmit}>
                        <input 
                            onChange={handleChange}
                            value={values.nombre}
                            type={'text'}
                            placeholder='Tu nombre'
                            className="border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
                            name="nombre"
                        />
                        {errors.nombre && <p className="alert alert-danger">{errors.nombre}</p>}

                        <input 
                            onChange={handleChange}
                            value={values.direccion}
                            type={'text'}
                            placeholder='Direccion'
                            className="border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
                            name="direccion"
                        />
                        {errors.direccion && <p className="alert alert-danger">{errors.direccion}</p>}

                        <input 
                            onChange={handleChange}
                            value={values.email}
                            type={'email'}
                            placeholder='Tu Email'
                            className="border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
                            name="email"
                        />
                        {errors.email && <p className="alert alert-danger">{errors.email}</p>}


                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit" disabled={isSubmitting}>Enviar</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Checkout