//        IMPORTACIONES

// Modulos
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Estilos
import './ItemList.css'

// Componentes
import Item from '../item/Item.js'

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


    // JSON
    // useEffect(() =>{

    //     fetch('/productos.json')
    //         .then(res => res.json())
    //         .then(json => setProductos(json.map( productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)))
    // }, [])