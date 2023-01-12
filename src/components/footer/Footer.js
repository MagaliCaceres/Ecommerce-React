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
                    <input type="email" placeholder="email@example.com...."></input> 
                </div>
                <div className='footer_redes'>
                    <a href="./Footer.js"><FaYoutube className='redes_icon'/></a>
                    <a href="./Footer.js"><FaTiktok className='redes_icon'/></a>
                    <a href="./Footer.js"><FaTwitter className='redes_icon'/></a>
                    <a href="./Footer.js"><FaInstagram className='redes_icon'/></a>
                </div>
            </div>
            <div className='footer_copyright'>
                <p>
                <FaCopyright className='copyright_icon'/>2022 - Vibes Tienda De Vinilos - Sitio Web Desarrollado Por Magali Caceres.
            </p>
            </div>

        </footer>
    )
}


//        EXPORTACIÓN
export default Footer