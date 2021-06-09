/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';
import ReactDOM from 'react-dom';

//Componentes
import App from './App';

//Estilos
import './assets/estilos/estilos.css';

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);