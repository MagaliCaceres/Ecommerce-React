//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom'


// Estilos
import './ItemList.css'

// Componentes
import Item from '../item/Item.js'

import { FaGuitar } from "react-icons/fa";
import { GiGuitarBassHead } from "react-icons/gi";
import { GiDrumKit } from "react-icons/gi";
import { GiMicrophone } from "react-icons/gi";
import { GiGuitarHead } from "react-icons/gi";
import { GiPianoKeys } from "react-icons/gi";
import { GiViolin } from "react-icons/gi";
import { BsFillPlayFill } from "react-icons/bs";

// Core


//        LOGICA

// Función constructora
const ItemList = ({item}) =>{


    return(
        <div className='contenedor_productos'>
            <div>
                <div className='botones_categorias'>
                    <button><Link to="/categoria/Discos" className='link_categoria'>Discos</Link></button>
                    <button><Link to="/categoria/Vinilos" className='link_categoria'>Vinilos</Link></button>
                </div>
                <div className="contenedor_generos">
                    <div className='carta_genero'>
                        <FaGuitar className="icono_genero"/>
                        <p>Folk</p>
                    </div>
                    <div className='carta_genero'>
                        <GiDrumKit className="icono_genero"/>
                        <p>Indie</p>
                    </div>
                    <div className='carta_genero'>
                        <GiGuitarBassHead className="icono_genero"/>
                        <p>Funk</p>
                    </div>
                    <div className='carta_genero'>
                        <GiMicrophone className="icono_genero"/>
                        <p>Pop</p>
                    </div>
                    <div className='carta_genero'>
                        <GiGuitarHead className="icono_genero"/>
                        <p>Rock</p>
                    </div>
                    <div className='carta_genero'>
                        <GiViolin className="icono_genero"/>
                        <p>Clásica</p>
                    </div>
                    <div className='carta_genero'>
                        <GiPianoKeys className="icono_genero"/>
                        <p>R&B</p>
                    </div>
                    <div className='carta_genero'>
                        <BsFillPlayFill className="icono_genero"/>
                        <p>Directo</p>
                    </div>
                </div>
                {
                    item.map(producto=>(
                        <Item key={producto.id} item={producto}/>
                ))
            }
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemList
