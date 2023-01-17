//        IMPORTACIONES

// Modulos

// Estilos
import './Footer.css'

import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";

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
                <div className='contacto'>
                    <h4>Contactanos</h4>
                    <div className='contacto_info'>
                        <p><MdCall/> (+54) 11 3000-1111</p>
                        <a href='#'><MdOutlineAlternateEmail/> vibesVinilos@gmail.com</a>
                    </div>
                </div>
                <div className='footer_redes'>
                    <a href="./Footer.js"><FaWhatsapp className='redes_icon'/></a>
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