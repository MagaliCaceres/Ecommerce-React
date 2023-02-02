//        IMPORTACIONES

// Modulos

// Estilos
import './Home.css'

// Componentes

import { FaRecordVinyl } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
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
const Home = () =>{
    
    return(
        <div>
            <main className='home'>
                <div className='home_texto'>
                    <h2 className='vibes'>VIBES</h2>
                    <h2 className='vinyl'>VINYL</h2>
                    <h3>Tienda De Vinilos y Discos</h3>
                    <p>El Viaje Del Sonido A Través Del Tiempo</p>
                    <div class="container">
                        <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                            <circle cx="170" cy="170" r="160" stroke="#d25a1e"/>
                            <circle cx="170" cy="170" r="135" stroke="#fff"/>
                            <circle cx="170" cy="170" r="110" stroke="#d25a1e"/>
                            <circle cx="170" cy="170" r="85" stroke="#fff"/>
                            <circle cx="170" cy="170" r="20" stroke="#d25a1e"/>
                        </svg>
                    </div>
                </div>
            </main>
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
            <div className='tarjetas_info'>
                <div className='tarjeta'>
                    <div>
                        <FaRecordVinyl className='tarjeta_icon'></FaRecordVinyl>
                    </div>
                    <div className='tarjeta_info'>
                        <h3>Vinilos</h3>
                        <p>Variedad de vinilos y discos nacionales e internacionales.</p>
                    </div>
                </div>
                <div className='tarjeta'>
                    <div>
                        <FaTruckMoving className='tarjeta_icon'/>
                    </div>
                    <div className='tarjeta_info'>
                        <h3>Entregas</h3>
                        <p>Envios a todos los rincones del país en menos de 72hs.</p>
                    </div>
                </div>
                <div className='tarjeta'>
                    <div>
                        <GiCardboardBoxClosed className='tarjeta_icon'/>
                    </div>
                    <div className='tarjeta_info'>
                        <h3>Packaging</h3>
                        <p>Packagign 100% original.</p>
                        <p>Importador con su sello original.</p>
                    </div>
                </div>
                <div className='tarjeta'>
                    <div>
                        <FaHandshake className='tarjeta_icon'/>
                    </div>
                    <div className='tarjeta_info'>
                        <h3>Clientes</h3>
                        <p>Si deseas algun producto no disponible, ¡Contactanos!</p>
                    </div>
                </div>
            </div>
        </div>

    )
}


//        EXPORTACIÓN
export default Home