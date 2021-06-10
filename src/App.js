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
//import EscenaInicio from './componentes/home/EscenaHome';
//import Menu from './componentes/menu/Menu';

const App = () =>{

  //Variables de estados
  const [escenasJuego, cambiarEscenasJuego] = useState ({ landing: 'true',
                                                          usuarios: null,
                                                          home: null,
                                                          retos: null });

  const FooterLanding = escenasJuego.landing;
  const FooterAvatar = escenasJuego.home;

  
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
        escenasJuego.home === 'true' &&

        <EscenaAvatar 
          estadoSeleccionAvatar= {escenasJuego}
          cambiarEstadoSeleccionAvatar= {cambiarEscenasJuego}
          
          mostrarFooterLanding= { FooterLanding }
          mostrarFooterAvatar= { FooterAvatar }
        />
      }

      { escenasJuego.landing === 'false' &&
        escenasJuego.usuarios === 'false' &&
        escenasJuego.home === 'false' &&
        escenasJuego.retos === 'true' &&

        <EscenaRetos 
        />
      }


      

    </>
  );
}


export default App;
