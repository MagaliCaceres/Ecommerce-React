//        IMPORTACIONES

// Modulos
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


// Estilos
import './ItemList.css'

// Componentes
import Item from '../item/Item.js'
import { FiFilter } from "react-icons/fi";

// Core


//        LOGICA

// Función constructora
const ItemList = () =>{

    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams()

    useEffect(() =>{
        if(categoriaId != null){
            fetch(`https://fakestoreapi.com/products/category/${categoriaId}`)
            .then(res=>res.json())
            .then(json=>setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)))
        } else{
            fetch(`https://fakestoreapi.com/products`)
            .then(res=> res.json())
            .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)))
        }
    }, [categoriaId]) 


    return(
        <div className='contenedor_productos'>
            <div>
                <div className="categorias">
                    <button className="menu_link_button menu_link"><FiFilter className='icono_categoria'/></button>     
                        <div className="categorias-content">
                            <Link to="/categoria/electronics">electronics</Link>
                            <Link to="/categoria/jewelery">jewelery</Link>
                            <Link to="/categoria/men's clothing">men's clothing</Link>
                            <Link to="/categoria/women's clothing">women's clothing</Link>
                        </div>
                </div>
                {productos}
            </div>
        </div>

    )
}


//        EXPORTACIÓN
export default ItemList
