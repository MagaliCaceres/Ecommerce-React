//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom'
import { useState } from 'react'

// Estilos
import './ItemDetail.css'

// Componentes
import ItemCount from '../itemCount/ItemCount'

// Core


//        LOGICA

// Función constructora
const ItemDetail = (props) =>{

    const {title,category,price,image,description} = props.data

    const [cantidadDeProductosAComprar, setCantidadDeProductosAComprar] = useState(0)
    
    const tomarCantidad = (cantidad) =>{
        setCantidadDeProductosAComprar(cantidad)
    }

    // Funcion agregar x cantidad de Productos
    const agregar = () => {
        console.log(`cantidad seleccionada: ${cantidadDeProductosAComprar}, vas a agregar al carrito un total de $${cantidadDeProductosAComprar * price} `)
    }

    return(
    <div>
        <div className='info_principal'>
            <div className='contenedor_img'>
                <div className='enlaces_atras'>
                    <Link to="/">Home &#8249;</Link>
                    <Link to="/productos">{category} &#8249;</Link>
                    <a href='#'>{title}</a>
                </div>
                <img src={image}></img>
            </div>
            <div className='contenedor_info'>
                <h2 className='info_nombre'>{title}</h2>
                <p className='info_precio'>${price}</p>
                <p className='info_descripcion'>{description}</p>
                <div className='carta_compra'>
                    <ItemCount stock={10} cantidadAComprar={tomarCantidad}/>
                    <div className='contador_agregar'>
                        <Link to="/carrito"><button onClick={agregar}>Agregar</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}


//        EXPORTACIÓN
export default ItemDetail

    // const {publicacion,nombre,artista,descripcion,imagen,genero,sello,canciones,duracion,categoria,precio} = props.data

    // return(
    //     <div>
    //         <div className='info_principal'>
    //             <div className='contenedor_img'>
    //                 <div className='enlaces_atras'>
    //                     <a href='#'> Home &#8249;</a>
    //                     <a href='#'> {categoria} &#8249;</a>
    //                     <a href='#'> {nombre} - {artista}</a>
    //                 </div>
    //                 <img src={imagen}></img>
    //             </div>
    //             <div className='contenedor_info'>
    //                 <p className='info_fecha'>Publicación: {publicacion}</p>
    //                 <h2 className='info_nombre'>{nombre} - {artista}</h2>
    //                 <p className='info_precio'>${price}</p>
    //                 <p className='info_descripcion'>{description}</p>
    //                 <ul className='contenedor_info_lista'>
    //                     <li className='lista_info_genero'>Género: <p>{genero}</p></li>
    //                     <li className='lista_info_canciones'>Cantidad de Canciones: <p>{canciones}</p></li>
    //                     <li className='lista_info_duracion'>Duración: <p>{duracion}</p></li>
    //                     <li className='lista_info_sello'>Sello: <p>{sello}</p></li>
    //                     <li className='lista_info_categoria'>Categoría: <p>{categoria}</p></li>
    //                 </ul>
    //             </div>
    //         </div>
    //         <div className='carta_compra'>
    //                 <ItemCount stock={stock}/>
    //         </div>
    //     </div>
    //     )