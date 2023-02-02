//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom'

// Estilos
import './CartList.css'

// Componentes
import CartItem from '../cartItem/CartItem'


// Core


//        LOGICA

// Función constructora
const CartList = () =>{

    
    return(
        <div className='lista_carrito'>
            <p>El carrito de compras se encuentra vacio.</p>
            <div className='volver_a_tienda'>
                <Link to="/productos" className='link_volver'>Volver a la Tienda</Link>
            </div>
            <CartItem/>
        </div>
    )
}


//        EXPORTACIÓN
export default CartList