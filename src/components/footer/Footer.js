//        IMPORTACIONES

// Modulos

// Estilos
import './Footer.css'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

// Componentes


// Core


//        LOGICA

// Función constructora
const Footer = () =>{
    
    return(
        <footer className='footer'>
            <div className='footer_division'>
                <div className='footer_contact'>
                    <label>Suscríbete a la newsletter</label>
                    <input type="email"  autocomplete="off" placeholder="email@example.com...."></input> 
                </div>
                <div className='footer_redes'>
                    <a><FaYoutube className='redes_icon'/></a>
                    <a><FaTiktok className='redes_icon'/></a>
                    <a><FaTwitter className='redes_icon'/></a>
                    <a><FaInstagram className='redes_icon'/></a>
                </div>
            </div>
            <div className='footer_copyright'>
                <p>
                <FaCopyright className='copyright_icon'/>2022 - RY X Tienda Oficial - Magali Caceres.
            </p>
            </div>

        </footer>
    )
}


//        EXPORTACIÓN
export default Footer