/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
import MarcoInicio from './marco/MarcoInicio';
import Footer from '../Footer/Footer';


const EscenaLanding = ({estado, cambiarEstado}) => { //Se anexan props para saber en donde se da el paso de escena de usuarios
  
    return(
      <>
          <section> {/*Elemento con estilos en estilos.css*/}

              <MarcoInicio
                estadoMarco= {estado}
                cambiarEstadoMarco= {cambiarEstado}
              /> {/*Se llama al componente de MarcoInicio, se heredan las props de App.js*/}

             
              <Footer /> {/*Se llama al componente de Footer.js*/}               

          </section>   
  
      </>
    );
  }  
  
  export default EscenaLanding;