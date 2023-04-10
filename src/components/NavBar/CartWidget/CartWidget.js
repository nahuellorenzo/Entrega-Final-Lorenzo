import cart from './cart-fill.svg'
import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { useContext } from 'react'

export const CartWidget = () => {

    const { cart:cartin, totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cartin.length > 0 ? 'cart-widget-active' : ''}`}>
            <div className='container__cart'>
                <img src={cart} alt="carrito" className='color__cart' />
                <p className='p__carrito'>{totalCantidad()}</p>
            </div>
        </Link>
    )
} 
