//        IMPORTACIONES

// Modulos

// Estilos
import './CartListContainer.css'

// Componentes
import CartList from '../cartList/CartList'

// Core
import { BsCart2 } from "react-icons/bs";


//        LOGICA

// Función constructora
const CartListContainer = () =>{
    
    return(
    <div className='contenedor_carrito'>
        <h2>Carrito <BsCart2/></h2>
        <CartList/>
    </div>
    )
}


//        EXPORTACIÓN
export default CartListContainer