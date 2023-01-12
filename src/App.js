//        IMPORTACIONES

// Modulos

// Estilos

// Componentes
import NavBar from './components/navbar/NavBar.js';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Footer from './components/footer/Footer';

// Core


//        LOGICA

// Función constructora
function App() {
  return (
    
    <NavBar/>,
    <ItemListContainer  greeting= "Productos"/>,
    <Footer/>
  );
}


//        EXPORTACIÓN
export default App