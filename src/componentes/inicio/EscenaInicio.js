/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
import MarcoInicio from './marco/MarcoInicio';
import Footer from '../Footer/Footer';

const EscenaInicio = () =>{
    return(
      <>
      
        <section>
            <MarcoInicio />
            <Footer />
        </section>        
  
      </>
    );
  }  
  
  export default EscenaInicio;