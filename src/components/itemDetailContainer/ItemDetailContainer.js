//        IMPORTACIONES

// Modulos
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

// Estilos
import './ItemDetailContainer.css'

// Componentes
import ItemDetail from '../itemDetail/ItemDetail'

// Core


//        LOGICA

// Función constructora
const ItemDetailContainer = () =>{

    const [productos, setProductos] = useState([])

    const {productoId} = useParams()

    useEffect(() =>{
        
        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos}/>))
    }, [productoId])

    return(
        <article>
            {productos}
        </article>
        
    )
}


//        EXPORTACIÓN
export default ItemDetailContainer