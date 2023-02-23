import cart from './cart-fill.svg'
import './CartWidget.scss'

export const CartWidget =  () => {
    return (
        <div className='container__cart'>
            <img src={cart} alt="carrito" className='color__cart'/>
            <p className='p__carrito'>0</p>
        </div>
    )
} 
