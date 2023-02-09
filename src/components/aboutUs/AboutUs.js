//        IMPORTACIONES

// Modulos
import { useEffect, useState } from 'react'
import Cargando from '../cargando/Cargando';

// Estilos
import './AboutUs.css'

// Componentes

// Core


//        LOGICA

// Función constructora
const AboutUs = () =>{

    
    // cargando...
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
        setCargando(false);
        }, 1000);
    }, []);

    
    return(
        <div>
            {cargando ? (
                <Cargando/>
            ): (
                <div>
                    <div className='nosotros'>
                        <div className='nosotros_cabecera'>
                            <div className='cabecera_texto'>
                                <h2>Vibes</h2>
                                <h3>Vinyl</h3>
                                <p>"Afirmamos que el amor a la música no es más que amor a aquellos momentos donde somos conscientes que estamos vivos.</p>
                            </div>
                            <div className='cabecera_imagen'>
                                <img src='/img/nosotros.png' alt='apilación de discos y vinilos'></img>
                            </div>
                        </div>
                        <div className='texto_nosotros'>
                            <p>"Vibes Vinyl" es una tienda virtual, fundada en el año 2020, con el fin de reivindicar el discurso que muchos melómanos llevan como slogan: </p>
                            <p className='texto_especial'>"El sonido de los vinilos jamás fue superado por ninguna nueva tecnología".</p>
                            <br/>
                            <p>Nuestro deseo es llevar la experiencia de la música a su mejor nivel; proporcionando aquellos elementos que por mucho tiempo formaron parte de nuestra vida; como tambien proporcionar la vivencia de esta experiencia a las nuevas generaciones. </p>
                            <br/>
                            <p>Como participantes de la comunidad melómana, buscamos que todos los usuarios puedan disfrutar de sus artistas preferidos. Sin limite de decadas, géneros, estilos, artistas o bandas.</p>
                            <br/>
                            <p>Nos caracterizamos por la busqueda de brindar nuevos horizontes musicales a nuestros usuarios. Desde la experiencia de integrar a los menos consumidores mainstream a los sonidos de hoy en día en una tecnología de otra decada, como nutrir a los mas jovenes de la experiencia de sentirse dentro de las decadas pasadas. </p>
                            <br/>
                            <p>Hoy nos encontramos en busqueda de abrirnos camino hacia toda Latinoamérica ¡Y todo gracias a los más de 30.000 usuarios que confian en nuestro proyecto. </p>
                        </div>
                    </div>
                    <div className='pieDePagina_imagen'>
                        <img src='/img/nosotrosLogo.png' alt='Texto Vibes Vinyl'></img>
                    </div>
                    <div className='nosotros_cartel'>
                        <p>¡Te invitamos a ser parte de esta comunidad melómana!</p>
                    </div>
                </div>
                )}
        </div>

    )
}


//        EXPORTACIÓN
export default AboutUs