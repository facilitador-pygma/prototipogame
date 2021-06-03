/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Imagenes
import logoInicio from '../../../assets/img/Logo_Pantalla_de_bienvenida.png';

//Elementos
import { Marco,
         Barra,
         ContenedorCirculos,
         Circulos,
         ContenidoMarco } from '../../../elementos/StyledInicio';

const MarcoInicio = () =>{
    return(
      <>
        <Marco> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}

            <Barra></Barra> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}

            <ContenidoMarco> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}
               {/*<img src={logoInicio}/>*/}
            </ContenidoMarco> 
                    
            <ContenedorCirculos> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}

                <Circulos></Circulos>
                <Circulos></Circulos>
                <Circulos></Circulos>
                <Circulos></Circulos> {/*Todos son un span, se usa los estilos del elemento StyledInicio.js*/}
                <Circulos></Circulos>
                <Circulos></Circulos>
                <Circulos></Circulos>
                
            </ContenedorCirculos>
                    
            </Marco>
       

      </>
    );
  }  
  
  export default MarcoInicio;