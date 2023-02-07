//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom';

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
            <h2 className='somos'>Servicios</h2>
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
            <h2 className='somos'>¿Quienes Somos?</h2>            
            <div className='texto_home'>
                <div className='imagen_somos'>
                    <img alt="Logo Vinilo" src='/img/vibesLogo.png'></img>
                </div>
                <div>
                    <p className='slogan'>"Afirmamos que el amor a la música no es más que amor a aquellos momentos donde somos conscientes que estamos vivos.</p>
                    <br/>
                    <p>"Vibes Vinyl" es una tienda virtual, fundada en el año 2020, con el fin de reivindicar el discurso que muchos melómanos llevan como slogan: </p>
                    <p className='texto_especial'>"El sonido de los vinilos jamás fue superado por ninguna nueva tecnología".</p>
                    <br/>
                    <p>Nuestro deseo es llevar la experiencia de la música a su mejor nivel; proporcionando aquellos elementos que por mucho tiempo formaron parte de nuestra vida; como tambien proporcionar la vivencia de esta experiencia a las nuevas generaciones. </p>
                </div>
            </div>
        </div>

    )
}


//        EXPORTACIÓN
export default Home