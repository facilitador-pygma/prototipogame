/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Componentes
import LogoG4T from './../logog4t/LogoG4T';
import Menu from './../menu/Menu';
import Footer from './../footer/Footer';
import AvatarUno from './avatarUno/AvatarUno';
import AvatarDos from './avatarDos/AvatarDos';

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
         BoxAvatars,
         BoxInputEscenaAvatar,
         TituloEscenaAvatar,
         InputEscenaAvatar } from './../../elementos/StyledEscenaAvatar';

const EscenaAvatar = ({ estadoSeleccionAvatar, cambiarEstadoSeleccionAvatar,  mostrarFooterLanding, mostrarFooterAvatar, estadoEscogerAvatar, cambiarEstadoEscogerAvatar }) => {

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
                    <ImgMarcoSeleccionAvatar src = {cajaSeleccionAvatar} />
                    <BoxTituloEscenaAvatar>
                        <TituloEscenaAvatar>selecciona tu avatar</TituloEscenaAvatar>
                    </BoxTituloEscenaAvatar>
                    
                    <BoxAvatars>

                        <AvatarUno 
                            estadoSeleccionAvatar= { estadoSeleccionAvatar }
                            cambiarEstadoSeleccionAvatar = { cambiarEstadoSeleccionAvatar }

                            estadoEscogerAvatar = { estadoEscogerAvatar }
                            cambiarEstadoEscogerAvatar= { cambiarEstadoEscogerAvatar }
                        />

                        <AvatarDos 
                            estadoSeleccionAvatar= { estadoSeleccionAvatar }
                            cambiarEstadoSeleccionAvatar = { cambiarEstadoSeleccionAvatar }

                            estadoEscogerAvatar = { estadoEscogerAvatar }
                            cambiarEstadoEscogerAvatar= { cambiarEstadoEscogerAvatar }
                        />

                    </BoxAvatars>
                    

                    <BoxInputEscenaAvatar>
                        <InputEscenaAvatar type= "text" placeholder= "Escribe un nombre"/>
                    </BoxInputEscenaAvatar>
                </BoxMarcoSeleccionAvatar>

                <Footer 
                    mostrarFooterLanding= {mostrarFooterLanding}
                    mostrarFooterAvatar = {mostrarFooterAvatar}
                /> {/*Se llama al componente de Footer.js*/}  

            </section>
        </>
    );
}  
    
export default EscenaAvatar;