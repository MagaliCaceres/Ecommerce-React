//        IMPORTACIONES

// Modulos

// Estilos
import './ItemDetail.css'

// Componentes

// Core


//        LOGICA

// Función constructora
const ItemDetail = (props) =>{

    // const {publicacion,nombre,artista,descripcion,imagen,genero,sello,canciones,duracion,categoria,precio} = props.data

    const {title,category,price,image,description} = props.data
    
    return(
    <div>
        <div className='info_principal'>
            <div className='contenedor_img'>
                <div className='enlaces_atras'>
                    <a href='#'> Home &#8249;</a>
                    <a href='#'> {category} &#8249;</a>
                    <a href='#'> {title}</a>
                    {/* <a href='#'> {nombre} - {artista}</a> */}
                </div>
                <img src={image}></img>
            </div>
            <div className='contenedor_info'>
                {/* <p className='info_fecha'>Publicación: {publicacion}</p> */}
                <h2 className='info_nombre'>{title}</h2>
                {/* <h2 className='info_nombre'>{nombre} - {artista}</h2> */}
                <p className='info_precio'>${price}</p>
                <p className='info_descripcion'>{description}</p>
                {/* <ul className='contenedor_info_lista'>
                    <li className='lista_info_genero'>Género: <p>{genero}</p></li>
                    <li className='lista_info_canciones'>Cantidad de Canciones: <p>{canciones}</p></li>
                    <li className='lista_info_duracion'>Duración: <p>{duracion}</p></li>
                    <li className='lista_info_sello'>Sello: <p>{sello}</p></li>
                    <li className='lista_info_categoria'>Categoría: <p>{categoria}</p></li>
                </ul> */}
            </div>
        </div>
    </div>
    )
}


//        EXPORTACIÓN
export default ItemDetail