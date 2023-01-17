//        IMPORTACIONES

// Modulos

// Estilos
import './AboutUs.css'

// Componentes



// Core


//        LOGICA

// Función constructora
const AboutUs = () =>{
    
    return(
        <div>
            <div className='nosotros'>
                <div className='nosotros_cabecera'>
                    <div className='cabecera_texto'>
                        <h2>Vibes</h2>
                        <h3>Vinyl</h3>
                        <p>"Afirmamos que el amor a la música no es más que amor a aquellos momentos donde somos conscientes que estamos vivos.</p>
                    </div>
                    <div className='cabecera_imagen'>
                        <img src='/img/nosotros.png'></img>
                    </div>
                </div>
                <div className='texto_nosotros'>
                    <p>"Vibes Vinyl" es una tienda virtual, fundada en el año 2020, con el fin de reivindicar el discurso que muchos melómanos llevan como slogan: </p>
                    <p className='texto_especial'>"El sonido de los vinilos jamás fue superado por ninguna nueva tecnología".</p>
                    <br/>
                    <p>Nuestro deseo es llevar la experiencia de la música a su mejor nivel; proporcionando aquellos elementos que por mucho tiempo formaron parte de nuestra vida; como tambien proporcionar la vivencia de esta experiencia a las nuevas generaciones. </p>
                    <br/>
                    <p>Como participantes de la comunidad melómana, buscamos que todos los usuarios puedan disfrutar de sus artistas preferidos. Sin limite de decadas, géneros, estilos, artistas y bandas.</p>
                    <br/>
                    <p>Hoy nos encontramos en busqueda de abrirnos camino hacia toda Latinoamérica ¡Y todo gracias a los más de 30.000 usuarios que confian en nuestro proyecto. </p>
                </div>
            </div>
            <div className='nosotros_cartel'>
                <p>¡Te invitamos a ser parte de esta comunidad melómana!</p>
            </div>
        </div>

    )
}


//        EXPORTACIÓN
export default AboutUs