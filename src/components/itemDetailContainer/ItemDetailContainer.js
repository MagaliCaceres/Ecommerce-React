//        IMPORTACIONES

// Modulos
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

// Estilos
import './ItemDetailContainer.css'

// Componentes
import ItemDeatil from '../itemDetail/ItemDetail'

// Core


//        LOGICA

// Función constructora
const ItemDetailContainer = () =>{

    const [productos,setProductos] = useState([])

    const {productoId} = useParams()

    useEffect(() => {
        
        fetch(`/productos.json/${productoId}`)
        .then(res => res.json())
        .then(productos => setProductos(<ItemDeatil key={productos.id} id={"producto" + productos.id} data={productos}/>))

    },[])
    

    
    return(
        <article>
            {productos}
        </article>
    )
}


//        EXPORTACIÓN
export default ItemDetailContainer