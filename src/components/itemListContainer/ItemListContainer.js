//        IMPORTACIONES

// Modulos

// Estilos
import './ItemListContainer.css'

// Componentes
import ItemList from '../itemList/ItemList.js'


// Core


//        LOGICA

// Función constructora
const ItemListContainer = () =>{

    return(
        <div className='contenedor'>
            <div className='encabezado_lista_productos'>
                <h2>Productos</h2>
                <p>Todos Nuestros Productos</p>
            </div>
            <ItemList/>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemListContainer