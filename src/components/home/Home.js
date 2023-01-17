//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom'

// Estilos
import './Home.css'

// Componentes
import { BsVinyl } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";



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
            <div className='home_productos'>
                <p>Productos</p>
            </div>
            <div className='tarjetas_info'>
                <div className='tarjeta'>
                    <div>
                        <BsVinyl className='tarjeta_icon'/>
                    </div>
                    <div className='tarjeta_info'>
                        <h3>Vinilos</h3>
                        <p>Variedad de vinilos y discos nacionales e internacionales.</p>
                    </div>
                </div>
                <div className='tarjeta'>
                    <div>
                        <BsTruck className='tarjeta_icon'/>
                    </div>
                    <div className='tarjeta_info'>
                        <h3>Entregas</h3>
                        <p>Envios a todos los rincones del país</p>
                        <p>en menos de 72hs.</p>
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