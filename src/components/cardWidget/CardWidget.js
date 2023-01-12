//        IMPORTACIONES

// Modulos

// Estilos
import './CardWidget.css'


// Componentes
import { FaShoppingCart } from "react-icons/fa";

// Core




//        LOGICA

// Función constructora
const CardWidget = (props) =>{    
    return(
        <div className='carrito'>
            <div>
                <FaShoppingCart className='carrito_icon'/>
            </div>
            <div className='carrito_numero'>
                {props.cantidad}
            </div>
        </div>
    )
}




//        EXPORTACIÓN
export default CardWidget
