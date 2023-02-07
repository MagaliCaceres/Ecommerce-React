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
                    <button><Link to="/productos" className='link_categoria'>Todos</Link></button>
                </div>
                <div className="contenedor_generos">
                    <div className='carta_genero'>
                        <Link to="/categoria/Folk" className='genero_nombre'><FaGuitar className="icono_genero"/></Link>
                        <p><Link to="/categoria/Folk" className='genero_nombre'>Folk</Link></p>
                    </div>
                    <div className='carta_genero'>
                        <Link to="/categoria/Indie" className='genero_nombre'><GiDrumKit className="icono_genero"/></Link>
                        <p><Link to="/categoria/Indie" className='genero_nombre'>Indie</Link></p>
                    </div>
                    <div className='carta_genero'>
                        <Link to="/categoria/Funk" className='genero_nombre'><GiGuitarBassHead className="icono_genero"/></Link>
                        <p><Link to="/categoria/Funk" className='genero_nombre'>Funk</Link></p>
                    </div>
                    <div className='carta_genero'>
                        <Link to="/categoria/Pop" className='genero_nombre'><GiMicrophone className="icono_genero"/></Link>
                        <p><Link to="/categoria/Pop" className='genero_nombre'>Pop</Link></p>
                    </div>
                    <div className='carta_genero'>
                        <Link to="/categoria/Rock" className='genero_nombre'><GiGuitarHead className="icono_genero"/></Link>
                        <p><Link to="/categoria/Rock" className='genero_nombre'>Rock</Link></p>
                    </div>
                    <div className='carta_genero'>
                        <Link to="/categoria/Clasica" className='genero_nombre'><GiViolin className="icono_genero"/></Link>
                        <p><Link to="/categoria/Clasica" className='genero_nombre'>Clasica</Link></p>
                    </div>
                    <div className='carta_genero'>
                        <Link to="/categoria/R&B" className='genero_nombre'><GiPianoKeys className="icono_genero"/></Link>
                        <p><Link to="/categoria/R&B" className='genero_nombre'>R&B</Link></p>
                    </div>
                    <div className='carta_genero'>
                        <Link to="/categoria/Directo" className='genero_nombre'><BsFillPlayFill className="icono_genero"/></Link>
                        <p><Link to="/categoria/Directo" className='genero_nombre'>Directo</Link></p>
                    </div>
                </div>
                <div className='cartas_productos'>
                {
                    item.map(producto=>(
                        <Item key={producto.id} item={producto}/>
                ))
            }
                </div>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemList
