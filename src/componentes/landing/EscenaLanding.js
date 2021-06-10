/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
import MarcoInicio from './marco/MarcoInicio';
import Footer from '../footer/Footer';


const EscenaLanding = ({estado, cambiarEstado, mostrarFooterLanding, mostrarFooterAvatar}) => { //Se anexan props para saber en donde se da el paso de escena de usuarios
  
    return(
      <>
          <section> {/*Elemento con estilos en estilos.css*/}

              <MarcoInicio
                estadoMarco= {estado}
                cambiarEstadoMarco= {cambiarEstado}
              /> {/*Se llama al componente de MarcoInicio, se heredan las props de App.js*/}

             
              <Footer 
                mostrarFooterLanding= {mostrarFooterLanding}
                mostrarFooterAvatar = {mostrarFooterAvatar}
              /> {/*Se llama al componente de Footer.js*/}               

          </section>   
  
      </>
    );
  }  
  
  export default EscenaLanding;