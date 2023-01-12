//        IMPORTACIONES

// Modulos

// Estilos
import './Item.css'

// Componentes
import { Link } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount'

// Core


//        LOGICA

// Función constructora
const Item = (props) =>{

    const {nombre,artista,imagen,categoria,genero,precio,stock,id} = props.data
    
    return(
        <div className='carta'>
            <div className='carta_contenedor'>
                <div className='carta_encabezado'>
                    <p>{categoria}</p> 
                    <p>{genero}</p> 
                </div>
                <div className='carta_img'>
                    <Link to={`/producto/${id}` }>
                        <img className='imagen' src={imagen}></img>
                    </Link>
                </div>
                <div className='carta_info'>
                    <Link className='carta_nombre' to={`/producto/${id}` }>{nombre}</Link>
                    <p className='carta_artista'>{artista}</p>
                </div>
                <div>
                    <p className='carta_precio'>$ {precio}</p> 
                </div>
                <div className='carta_compra'>
                    <ItemCount stock={stock}/>
                </div>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default Item