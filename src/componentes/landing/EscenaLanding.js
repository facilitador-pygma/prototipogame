/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
//import MarcoInicio from './marco/MarcoInicio';
import Footer from '../footer/Footer';

//Elementos
import { Marco,
  Barra,
  ContenedorCirculos,
  Circulos,
  ContenidoMarco } from './../../elementos/StyledInicio';

const EscenaLanding = ({estado, cambiarEstado}) => {
  /*const [escenasJuego, cambiarEscenasJuego] = useState ({ landing: 'true',
                                                          usuarios: null,
                                                          home: null});*/

    const pasarEscenaUsuarios = () => {
      cambiarEstado( {...estado, landing: 'false', usuarios: 'true'} );
      console.log('cambiando estados desde landing');
    }

    return(
      <>
        {/*{ escenasJuego.landing === 'true' &&
          <section>

              <MarcoInicio
                estado= {escenasJuego}
                cambiarEstado= {cambiarEscenasJuego}/>

              <Footer />
          </section>   
        }*/}

        <section>

          <Marco> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}

              <Barra></Barra> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}

              <ContenidoMarco onClick= {pasarEscenaUsuarios}> {/*Es un div, se usa los estilos del elemento StyledInicio.js*/}
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

              <Footer />

          </section>
  
      </>
    );
  }  
  
  export default EscenaLanding;