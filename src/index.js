/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';
import ReactDOM from 'react-dom';
//import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom

//Componentes
import App from './App';
//import EscenaHome from './componentes/home/EscenaHome';
//import EscenaAvatar from './componentes/avatar/EscenaAvatar';

//Estilos
import './assets/estilos/estilos.css';

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,



  document.getElementById('root')
);