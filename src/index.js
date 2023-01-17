// IMPORTACIONES

// Modulos / Depencendia 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// Estilos
import './index.css';

// Componentes
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import AboutUs from './components/aboutUs/AboutUs'
import Footer from './components/footer/Footer';
// import App from './App';

// Web vitales / Core
import reportWebVitals from './reportWebVitals';





//        LOGICA

// Selector base de JS
const root = ReactDOM.createRoot(document.getElementById('root'));

// Aca se renderiza la app
root.render(
  <React.StrictMode>

    <BrowserRouter>

    <NavBar/>

    <Routes>

      <Route exact path='/' element={<Home/>}/>

      <Route exact path='/productos' element={<ItemListContainer/>}/>

      <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>

      <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>

      <Route exact path='/nosotros' element={<AboutUs/>}/>

    </Routes>

    <Footer/>

    </BrowserRouter>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
