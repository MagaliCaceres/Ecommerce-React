//        IMPORTACIONES

// Modulos
import { useState } from 'react'

// Estilos
import './ItemCount.css'

// Componentes


// Core


//        LOGICA

// Función constructora
const ItemCount = (props) =>{
    
    // Agrego un manejo de estado
    const [contador , setContador] = useState(0);

    // Funcion de sumar uno con un maximo de stock
    const sumarUno = () => {
        if(contador < props.stock){
            setContador(contador + 1)
        }
    }

    // Funcion de restar 1 al contador seteando un minimo de 0
    const restarUno = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    // Funcion agregar x cantidad de Productos
    const agregar = () => {
        console.log(contador)
    }
    

    return(
        <div className='contador'>
            <div className='contador_cantidad'>
                <button onClick={restarUno}>-</button>
                <p>{contador}</p>
                <button onClick={sumarUno}>+</button>
            </div>
            <div className='contador_agregar'>
                <button onClick={agregar}>Agregar</button>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemCount