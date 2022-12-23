// IMPORTACIONES

// Modulos / Depencendia 
import React from 'react';
import ReactDOM from 'react-dom/client';

// Estilos
import './index.css';

// Componentes
import NavBar from './components/navbar/NavBar.js';
import App from './App';
import Footer from './components/footer/Footer';

// Web vitales / Core
import reportWebVitals from './reportWebVitals';





//        LOGICA

// Selector base de JS
const root = ReactDOM.createRoot(document.getElementById('root'));

// Aca se renderiza la app
root.render(
  <React.StrictMode>

    <NavBar/>

    <App/>

    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
