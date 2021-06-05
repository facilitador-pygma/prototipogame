/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
import MarcoInicio from './marco/MarcoInicio';
import Footer from '../footer/Footer';


const EscenaLanding = ({estado, cambiarEstado}) => {
  
    return(
      <>
          <section>

              <MarcoInicio
                estadoMarco= {estado}
                cambiarEstadoMarco= {cambiarEstado}
              />

              <Footer />

          </section>   
  
      </>
    );
  }  
  
  export default EscenaLanding;