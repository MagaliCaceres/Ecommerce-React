//        IMPORTACIONES

// Modulos

// Estilos
import './CardWidget.css'
import { FaShoppingCart } from "react-icons/fa";

// Componentes

// Core




//        LOGICA

// Función constructora
const CardWidget = (props) =>{    
    return(
        <div className='carrito_numero'>
            <a><FaShoppingCart className='carrito_icon'/></a>
            {props.cantidad}
        </div>
    )
}




//        EXPORTACIÓN
export default CardWidget
