/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Componentes
import LogoG4T from './../logog4t/LogoG4T';
import Menu from './../menu/Menu';
import Footer from './../footer/Footer';

//Imagenes
import logoEmpresa from './../../assets/img/Logo_LoginyRegistro.png';
import cajaSeleccionAvatar from './../../assets/img/Caja_Selección avatar.png';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-do
//import EscenaInicio from './../home/EscenaHome';

//Elementos
import { BoxLogoG4T,
         BoxLogoEmpresa,
         ImgLogoEmpresa } from './../../elementos/StyledHome';

import { BoxMarcoSeleccionAvatar,
         ImgMarcoSeleccionAvatar,
         BoxTituloEscenaAvatar,
         BoxInputEscenaAvatar,
         TituloEscenaAvatar,
         InputEscenaAvatar } from './../../elementos/StyledEscenaAvatar';

const EscenaAvatar = ({ estadoSeleccionAvatar, cambiarEstadoSeleccionAvatar}) => {

    //Define la funcion pasarEscenaUsuarios
    const pasarEscenaRetos = (e) => {
        e.stopPropagation(); //Detiene efecto burbuja si se presenta
        cambiarEstadoSeleccionAvatar( {...estadoSeleccionAvatar, landing: 'false', usuarios: 'false', home: 'false', retos: 'true' } ); //Cambia el estado de la escenas en App.js
        console.log('cambiando estado desde la seleccion del avatar');
    }

    return(  
        <>
            <section>

                <BoxLogoG4T>
                    <LogoG4T />
                </BoxLogoG4T>

                <BoxLogoEmpresa>
                    <ImgLogoEmpresa src= { logoEmpresa } />
                </BoxLogoEmpresa>
                
                <Menu />

                <BoxMarcoSeleccionAvatar>
                    <ImgMarcoSeleccionAvatar src = {cajaSeleccionAvatar} onClick= {pasarEscenaRetos}/>
                    <BoxTituloEscenaAvatar>
                        <TituloEscenaAvatar>selecciona tu avatar</TituloEscenaAvatar>
                    </BoxTituloEscenaAvatar>
                    <BoxInputEscenaAvatar>
                        <InputEscenaAvatar type= "text" placeholder= "Escribe un nombre"/>
                    </BoxInputEscenaAvatar>
                </BoxMarcoSeleccionAvatar>

                <Footer /> {/*Se llama al componente de Footer.js*/}  

            </section>
        </>
    );
}  
    
export default EscenaAvatar;