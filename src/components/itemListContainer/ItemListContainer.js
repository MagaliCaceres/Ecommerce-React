//        IMPORTACIONES

// Modulos
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import Cargando from '../cargando/Cargando';

// Estilos
import './ItemListContainer.css'

// Componentes
import ItemList from '../itemList/ItemList.js'
// Core


//        LOGICA

// Función constructora
// Función constructora
const ItemListContainer = () => {
    const { categoriaId } = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const queryRef = categoriaId
                ? query(
                    collection(db, "listaDeProducto"),
                    where("categoria", "==", categoriaId)
                )
                : collection(db, "listaDeProducto");

            // hacer la consulta
            const response = await getDocs(queryRef);
            const docsInfo = response.docs.map((doc) => {
                const newDoc = {
                    id: doc.id,
                    ...doc.data(),
                };
                return newDoc;
            });
            setProductos(docsInfo);
        };
        getData();
    }, [categoriaId]);

    // cargando...
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
        setCargando(false);
        }, 2000);
    }, []);
    
    return (
        <div className='contenedor'>

            {cargando ? (
                <Cargando/>
            ) : (
                <ItemList item={productos} />
            )}
        </div>
    );
};


//        EXPORTACIÓN
export default ItemListContainer