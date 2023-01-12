//        IMPORTACIONES

// Modulos
import { useState, useEffect } from 'react'

// Estilos
import './ItemList.css'

// Componentes
import Item from '../item/Item.js'

// Core


//        LOGICA

// Función constructora
const ItemList = () =>{

    const [productos, setProductos] = useState([])

    useEffect(() =>{

        fetch('/productos.json')
            .then(res => res.json())
            .then(json => setProductos(json.map( productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)))
    }, [])

    return(
        <div className='contenedor_productos'>
            <div>
            {productos}
            </div>
        </div>

    )
}


//        EXPORTACIÓN
export default ItemList