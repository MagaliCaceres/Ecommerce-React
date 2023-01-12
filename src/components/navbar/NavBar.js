//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom'

// Estilos
import './NavBar.css'

// Componentes
import CardWidget from '../cardWidget/CardWidget'


// Core


//        LOGICA

// Función constructora
const NavBar = () =>{
    
    return(
        

        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src='/img/vibesLogo.png'></img></Link>
                </div>
                <div className="menu">
                    <ul>
                        <li className="menu_link"><Link to="/">Home</Link></li>
                        <li className="menu_link"><Link to="/productos">Productos</Link></li>
                        <div className="dropdown">
                            <button className="menu_link_button menu_link">Categorias</button>     
                            <div className="dropdown-content">
                                <a href="#">Vinilos</a>
                                <a href="#">Discos</a>
                            </div>
                        </div>
                        <li className="menu_link"><Link to="/nosotros">Nosotros</Link></li>
                    </ul>
                </div>
                <div>
                    <CardWidget cantidad = "3"/>
                </div>
            </nav>
        </header>
    )
}


//        EXPORTACIÓN
export default NavBar