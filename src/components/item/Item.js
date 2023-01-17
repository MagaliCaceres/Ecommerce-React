//        IMPORTACIONES

// Modulos

// Estilos
import './Item.css'

// Componentes
import { Link } from 'react-router-dom'

// Core


//        LOGICA

// Función constructora
const Item = (props) =>{

    // JSON
    // const {nombre,artista,imagen,categoria,genero,precio,stock,id} = props.data


    // API
    const {title,category,price,id,image,description} = props.data
    
    return(
        <div className='carta'>
            <div className='carta_contenedor'>
                <div className='carta_encabezado'>
                    <p>{category}</p> 
                </div>
                <div className='carta_contenido'>
                    <div className='carta_img'>
                        <Link to={`/producto/${id}` }>
                            <img className='imagen' src={image} alt="portada del disco"></img>
                        </Link>
                    </div>
                    <div className='carta_contenedor_texto'>
                        <div className='carta_texto'>
                            <div className='carta_info'>
                                <Link className='carta_nombre' to={`/producto/${id}` }>{title}</Link>
                            </div>
                            <div className='carta_descripcion'>
                                <p className='carta_desc'>{description}</p>
                            </div>
                            <div>
                                <p className='carta_precio'>$ {price}</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default Item

{/* <div className='carta'>
<div className='carta_contenedor'>
    <div className='carta_encabezado'>
        <p>{category}</p> 
        <p>{genero}</p> 
    </div>
    <div className='carta_img'>
        <Link to={`/producto/${id}` }>
            <img className='imagen' src={image} alt="portada del disco"></img>
        </Link>
    </div>
    <div className='carta_info'>
        <Link className='carta_nombre' to={`/producto/${id}` }>{title}</Link>
        <p className='carta_artista'>{artista}</p>
    </div>
    <div>
        <p className='carta_precio'>$ {price}</p> 
    </div>
</div>
</div> */}