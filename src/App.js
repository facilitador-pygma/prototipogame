/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React, {useState} from 'react';

//Creadas
import EscenaLanding from './componentes/landing/EscenaLanding';
import EscenaUsuarios from './componentes/usuarios/EscenaUsuarios';

const App = () =>{

  //Variables de estados
  const [escenasJuego, cambiarEscenasJuego] = useState ({ landing: 'true',
                                                          usuarios: null,
                                                          home: null });

  
  return(
    <>
      { escenasJuego.landing === 'true' &&
        <EscenaLanding 
          estado= {escenasJuego}
          cambiarEstado= {cambiarEscenasJuego}
        />
      }

      { escenasJuego.landing === 'false' &&
        escenasJuego.usuarios === 'true' &&
        
        <EscenaUsuarios />
      }

    </>
  );
}


export default App;
