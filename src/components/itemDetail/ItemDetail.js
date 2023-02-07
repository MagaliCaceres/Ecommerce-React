//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext}  from '../../context/CartContext'

// Estilos
import './ItemDetail.css'

// Componentes
import ItemCount from '../itemCount/ItemCount'
import { AiOutlineCheck } from "react-icons/ai";




// Core


//        LOGICA

// Función constructora
const ItemDetail = ({item}) =>{

    const {agregarAlCarrito} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)

    const agregar = (contador)=>{
        agregarAlCarrito(item,contador);
        setCantidad(contador);
    }


    return(
    <div>
        <div className='info_principal'>
            <div className='contenedor_img'>
                <img src={item.imagen} alt={item.nombre}></img>
            </div>
            <div className='contenedor_info'>
                <div className='enlaces_atras'>
                    <Link className='link_atras' to="/">Home<span>/</span></Link>
                    <Link className='link_atras' to="/productos"> {item.categoria}<span>/</span></Link>
                    <a className='link_atras' href='#!'> {item.nombre} - {item.artista}</a>
                </div>
                <h2 className='info_nombre'>{item.nombre} - {item.artista}</h2>
                <p className='info_precio'>$ {item.precio}</p>
                <ul className='contenedor_info_lista'>
                    <li className='lista_info_genero'>Género: <p>{item.categoria}</p></li>
                    <li className='lista_info_canciones'>Cantidad de Canciones: <p>{item.canciones}</p></li>
                    <li className='lista_info_duracion'>Duración: <p>{item.duracion}</p></li>
                    <li className='info_fecha'>Publicación: <p className='info_fecha'>{item.publicacion}</p></li>
                    <li className='lista_info_sello'>Sello: <p>{item.sello}</p></li>
                </ul>
                <div>
                    <ul>
                        <li><a href="#modal1" className='formas_de_pago'>Formas de pago</a></li>
                    </ul>
                    <div id="modal1" className="modalmask">
                        <div className="modalbox movedown">
                            <a href="#close" title="Close" className="close">X</a>
                            <h2>Formas de Pago</h2>
                            <div className='info_modal'>
                                <h4>Tarjetas de Crédito</h4>
                                <p>Acreditación instantanea</p>
                                <div className='plataformas_pago'>
                                    <p>Hasta 3 cuotas sin interes</p>
                                    <img src='/img/visa.png' alt='logo visa'></img>
                                    <img src='/img/masterCard.png' alt='logo mastercard'></img>
                                    <img src='/img/americanexpress.png' alt='logo american express'></img>
                                    <img src='/img/naranja.png' alt='logo tarjeta naranja'></img>
                                    <img src='/img/cabal.png' alt='logo tarjeta cabal'></img>
                                </div>
                                <h4>Tarjetas de Débito</h4>
                                <p>Acreditación instantanea</p>
                                <div className='plataformas_pago'>
                                    <img src='/img/maestro.png' alt='logo tarjeta maestro'></img>
                                    <img src='/img/masterCardDebit.png' alt='logo mastercard debito'></img>
                                    <img src='/img/visaDebito.png' alt='logo visa debito'></img>
                                    <img src='/img/cabalDebito.png' alt='logo cabal debito'></img>
                                </div>
                                <h4>Efectivo</h4>
                                <div className='plataformas_pago'>
                                    <img src='/img/pagoFacil.png' alt='logo pafo facil'></img>
                                    <img src='/img/rapipago.png' alt='logo pafo facil'></img>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='stock_disponible'>
                        <p><span>{item.stock}</span> Unidades Disponibles</p>
                </div>
                <div className='carta_compra'>
                    <ItemCount initial={1} stock={item.stock} agregar={agregar}/>
                    {
                        cantidad >0 &&
                        <p className='agregado_exitoso'><AiOutlineCheck className='check_correcto'/> ¡Producto Agregado con Exito!</p>
                    }
                </div>
            </div>
        </div>
        <div className='info_descripcion'>
            <h4>Descripción</h4>
            <p>{item.descripcion}</p>
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

        // // destruccturación de la info del producto 
        // const {id,title,category,image,description,price} = props.data

        // const [cantidadDeProductosAComprar, setCantidadDeProductosAComprar] = useState("0")
    
        // const {agregarAlCarrito} = useCarContext()
        
        // const tomarCantidad = (cantidad) =>{
        //     setCantidadDeProductosAComprar(cantidad)
        // }
    
        // // Funcion agregar x cantidad de Productos
        // const agregar = () => {
    
        //     if(cantidadDeProductosAComprar !== 0){
                
        //         const producto = {
        //             id: id,
        //             title: title,
        //             category: category,
        //             price: price,
        //             count: cantidadDeProductosAComprar,
        //         }
    
        //         agregarAlCarrito(producto)
    
        //     }else{
        //         alert("No te olvides de añadir productos.")
        //     }
        // }
    