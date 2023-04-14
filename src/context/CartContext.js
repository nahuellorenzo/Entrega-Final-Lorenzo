import { createContext, useState, useEffect} from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState(init)

    const agregarAlCarrito = (item) => {
        setCart([...cart,item])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalCantidad = () => {
        return cart.reduce((acumu, prod) => acumu + prod.cont, 0)
    }

    const totalCompra = () => {
        return cart.reduce((acumu, prod) => acumu + prod.cont*prod.precio,0)
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalCompra,
            eliminarDelCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}