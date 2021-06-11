/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Imagenes
import imgPantallaBienvenida from '../../../assets/img/G4T_Pantalla_de_bienvenida_clic_.png';

//Elementos
import { Marco,
         Barra,
         ContenedorCirculos,
         Circulos,
         ContenidoMarco,
         ImgContenidoMarco } from '../../../elementos/StyledLanding';

const MarcoInicio = ( {estadoMarco, cambiarEstadoMarco} ) => {  //Se heredan los props para saber en donde se da el paso de escena al home

    //Define la funcion pasarEscenaUsuarios
    const pasarEscenaUsuarios = (e) => {
      e.stopPropagation(); //Detiene efecto burbuja si se presenta
      cambiarEstadoMarco( {...estadoMarco, landing: 'false', usuarios: 'true'} ); //Cambia el estado de la escenas en App.js
      console.log('cambiando estado desde el marco del landing');
    }

    return(
      <>
        <Marco> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}

            <Barra></Barra> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}

            <ContenidoMarco onClick= {pasarEscenaUsuarios}> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}
               <ImgContenidoMarco src={imgPantallaBienvenida}/>
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