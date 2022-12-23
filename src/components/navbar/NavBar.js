//        IMPORTACIONES

// Modulos

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
                    <a href="#" className="logo_titulo">RY X</a>
                </div>
                <div className="menu">
                    <ul>
                        <li className="menu_link"><a href="#">Home</a></li>
                        <li className="menu_link"><a href="#">Productos</a></li>
                        <div className="dropdown">
                            <button className="menu_link_button menu_link">Categorias</button>     
                            <div className="dropdown-content">
                                <a href="#">Discos</a>
                                <a href="#">Vinilos</a>
                                <a href="#">Indumentaria</a>
                                <a href="#">Bolsas</a>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className='carrito'>
                    <CardWidget cantidad = "2"/>
                </div>
            </nav>
        </header>
    )
}


//        EXPORTACIÓN
export default NavBar