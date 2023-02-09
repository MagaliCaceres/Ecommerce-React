//        IMPORTACIONES

// Modulos

// Estilos
import './Cargando.css'

// Componentes

// Core


//        LOGICA

// Función constructora
const Cargando = (
    
) =>{
    
    return(
        <div className="cargando">
            <svg className="loader cargando_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                <circle cx="170" cy="170" r="160" stroke="#d25a1e"/>
                <circle cx="170" cy="170" r="135" stroke="#fff"/>
                <circle cx="170" cy="170" r="110" stroke="#d25a1e"/>
                <circle cx="170" cy="170" r="85" stroke="#fff"/>
                <circle cx="170" cy="170" r="20" stroke="#d25a1e"/>
            </svg>
        </div>
    )
}


//        EXPORTACIÓN
export default Cargando