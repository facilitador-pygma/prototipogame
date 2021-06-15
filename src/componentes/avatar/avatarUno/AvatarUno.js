/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Imagenes
import avatarUno from './../../../assets/img/G4T_Avatar_Galatea.png';

//Elementos
import { BoxImgAvatar,
         ImgsAvatars } from './../../../elementos/StyledAvatars';


const AvatarUno = ( { estadoSeleccionAvatar, cambiarEstadoSeleccionAvatar, estadoEscogerAvatar, cambiarEstadoEscogerAvatar } ) => {

    //Define la funcion pasarEscenaUsuarios
    const pasarEscenaRetos = (e) => {
        e.stopPropagation(); //Detiene efecto burbuja si se presenta
        cambiarEstadoSeleccionAvatar( {...estadoSeleccionAvatar, landing: 'false', usuarios: 'false', home: 'false', retos: 'true' } ); //Cambia el estado de la escenas en App.js
        console.log('cambiando estado desde la seleccion del avatar 1');
        cambiarEstadoEscogerAvatar( {...estadoEscogerAvatar, avatar1: 'true', avatar2: 'false' } );
    }
 

    return ( 
        <>
            <BoxImgAvatar>
                <ImgsAvatars src= {avatarUno} onClick={pasarEscenaRetos} />
            </BoxImgAvatar>
        </>
     );
}
 
export default AvatarUno;