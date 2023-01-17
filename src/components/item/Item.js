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

    // JSON
    // const {nombre,artista,imagen,categoria,genero,precio,stock,id} = props.data


    // API
    const {title,category,price,id,image} = props.data
    
    return(
        <div className='carta'>
            <div className='carta_contenedor'>
                <div className='carta_encabezado'>
                    <p>{category}</p> 
                    {/* <p>{genero}</p>  */}
                </div>
                <div className='carta_img'>
                    <Link to={`/producto/${id}` }>
                        <img className='imagen' src={image} alt="portada del disco"></img>
                    </Link>
                </div>
                <div className='carta_info'>
                    <Link className='carta_nombre' to={`/producto/${id}` }>{title}</Link>
                    {/* <p className='carta_artista'>{artista}</p> */}
                </div>
                <div>
                    <p className='carta_precio'>$ {price}</p> 
                </div>
                <div className='carta_compra'>
                    <ItemCount stock="10"/>
                </div>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default Item