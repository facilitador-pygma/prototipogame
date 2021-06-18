/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React, {useState} from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom

//Creadas
import EscenaLanding from './componentes/landing/EscenaLanding';
import EscenaUsuarios from './componentes/usuarios/EscenaUsuarios';
import EscenaAvatar from './componentes/avatar/EscenaAvatar';
import EscenaRetos from './componentes/reto/EscenaReto';
import EscenaInstrucciones from './componentes/instrucciones/EscenaInstrucciones';
import EscenaRetoUno from './componentes/retos/escenaretouno/EscenaRetoUno';
import EscenaRespuesta from './componentes/respuesta/EscenaRespuesta';
//import EscenaInicio from './componentes/home/EscenaHome';
//import Menu from './componentes/menu/Menu';

const App = () =>{

  //Variables de estados
  const [escenasJuego, cambiarEscenasJuego] = useState ({ landing: 'true',
                                                          usuarios: null,
                                                          avatar: null,
                                                          retos: null,
                                                          instruccionR1: null,
                                                          reto1: null,
                                                          premio1: null, });

  const FooterLanding = escenasJuego.landing;
  const FooterAvatar = escenasJuego.avatar;
  const FooterRetos = escenasJuego.retos;
  const FooterInstrucciones = escenasJuego.instruccionR1;
  const FooterRetoUno = escenasJuego.reto1;
  const FooterSolucionReto = escenasJuego.premio1;

  const [ escogerAvatar, cambiarEscogerAvatar ] = useState ({ avatar1: null,
                                                              avatar2: null, });

  const AvatarUno = escogerAvatar.avatar1;
  const AvatarDos = escogerAvatar.avatar2;

  const [ mostrarResultadosRetos, cambiarMostrarResultadosRetos ] = useState ( { numEngranajes: null,
                                                                                 textResultadoReto: '', } );
 
  const ResultadoEngranajes = mostrarResultadosRetos.numEngranajes;
  const TextoResultadoReto = mostrarResultadosRetos.textResultadoReto;
  
  return(
    <>

      {/*{  escenasJuego.home === 'true' &&
      <Router> 
        <Menu />
          <div>
            <Switch> 
              <Route exact path = '/escenainicio'
                component = { EscenaInicio }/> 
              <Route path = '/escenaavatar'
                component = { EscenaAvatar }/> 
            </Switch> 
          </div> 
      </Router>   }*/}

      { escenasJuego.landing === 'true' &&
        <EscenaLanding 
          estado= { escenasJuego }
          cambiarEstado= { cambiarEscenasJuego }
          mostrarFooterLanding= { FooterLanding }
          mostrarFooterAvatar= { FooterAvatar }
        />
      }

      { escenasJuego.landing === 'false' &&
        escenasJuego.usuarios === 'true' &&
        
        <EscenaUsuarios 
          estado= {escenasJuego}
          cambiarEstado= {cambiarEscenasJuego}
        />
      }

      { escenasJuego.landing === 'false' &&
        escenasJuego.usuarios === 'false' &&
        escenasJuego.avatar === 'true' &&

        <EscenaAvatar 
          estadoSeleccionAvatar= {escenasJuego}
          cambiarEstadoSeleccionAvatar= {cambiarEscenasJuego}

          estadoEscogerAvatar= { escogerAvatar }
          cambiarEstadoEscogerAvatar = { cambiarEscogerAvatar }
          
          mostrarFooterLanding= { FooterLanding }
          mostrarFooterAvatar= { FooterAvatar }
        />
      }

      { escenasJuego.landing === 'false' &&
        escenasJuego.usuarios === 'false' &&
        escenasJuego.avatar === 'false' &&
        escenasJuego.retos === 'true' &&

        <EscenaRetos
          estadoSeleccionarReto= { escenasJuego }
          cambiarEstadoSeleccionReto= {cambiarEscenasJuego}

          mostrarFooterLanding= { FooterLanding }
          mostrarFooterAvatar= { FooterAvatar }
          mostrarFooterRetos = { FooterRetos } 
        />
      }

      { escenasJuego.landing === 'false' &&
        escenasJuego.usuarios === 'false' &&
        escenasJuego.avatar === 'false' &&
        escenasJuego.retos === 'false' &&
        escenasJuego.instruccionR1 === 'true' &&

        <EscenaInstrucciones

          estado= {escenasJuego}
          cambiarEstado= {cambiarEscenasJuego}

          mostrarAvatar1= { AvatarUno }
          mostrarAvatar2= { AvatarDos }

          mostrarFooterLanding= { FooterLanding }
          mostrarFooterAvatar= { FooterAvatar }
          mostrarFooterRetos = { FooterRetos }
          mostrarFooterInstrucciones = { FooterInstrucciones }
        />
      }


      { escenasJuego.landing === 'false' &&
        escenasJuego.usuarios === 'false' &&
        escenasJuego.avatar === 'false' &&
        escenasJuego.retos === 'false' &&
        escenasJuego.instruccionR1 === 'false' &&
        escenasJuego.reto1 === 'true' &&

        <EscenaRetoUno

          estado= {escenasJuego}
          cambiarEstado= {cambiarEscenasJuego}
        
          mostrarAvatar1= { AvatarUno }
          mostrarAvatar2= { AvatarDos }

          mostrarFooterLanding= { FooterLanding }
          mostrarFooterAvatar= { FooterAvatar }
          mostrarFooterRetos = { FooterRetos }
          mostrarFooterInstrucciones = { FooterInstrucciones }
          mostrarFooterReto1 = { FooterRetoUno }

          mostrarResultadosRetos = {mostrarResultadosRetos}
          cambiarMostrarResultadosRetos = { cambiarMostrarResultadosRetos }


        />           

      }

      { escenasJuego.landing === 'false' &&
        escenasJuego.usuarios === 'false' &&
        escenasJuego.avatar === 'false' &&
        escenasJuego.retos === 'false' &&
        escenasJuego.instruccionR1 === 'false' &&
        escenasJuego.reto1 === 'false' &&
        escenasJuego.premio1 === 'true' &&

        <EscenaRespuesta

          mostrarAvatar1= { AvatarUno }
          mostrarAvatar2= { AvatarDos }

          ResultadoEngranajes= {ResultadoEngranajes}
          TextoResultadoReto = { TextoResultadoReto }

          mostrarFooterLanding= { FooterLanding }
          mostrarFooterAvatar= { FooterAvatar }
          mostrarFooterRetos = { FooterRetos }
          mostrarFooterInstrucciones = { FooterInstrucciones }
          mostrarFooterReto1 = { FooterRetoUno }
          mostrarFooterSolucion = { FooterSolucionReto }

        />           

      }

    </>
  );
}


export default App;
