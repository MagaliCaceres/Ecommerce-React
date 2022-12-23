//        IMPORTACIONES

// Modulos

// Estilos
import './ItemListContainer.css'
import { FaShoppingBag } from "react-icons/fa";

// Componentes


// Core


//        LOGICA

// Función constructora
const ItemListContainer = (props) =>{
    
    return(
        <main className='main'>
            <div>
                <button className='main_button'>
                    {props.greeting}<FaShoppingBag className='main_button_icon'/>
                </button>
            </div>
        </main>
    )
}


//        EXPORTACIÓN
export default ItemListContainer