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
import puertaInstruccionReto1 from './../../assets/img/Puerta_Reto1.png';
import cajaInstruccionesReto1 from './../../assets/img/Instrucciones_Reto1.png';
import imgTemporizador from './../../assets/img/Tiempo_Reto1.png';
import imgInstruccionReto1 from './../../assets/img/Avatar_Reto1.png';
import avatarUno from './../../assets/img/G4T_Avatar_Galatea.png';
import avatarDos from './../../assets/img/G4T_Avatar_EDI_ufo.png';

//Elementos
import { BoxLogoG4T,
         BoxLogoEmpresa,
         ImgLogoEmpresa } from './../../elementos/StyledHome';

import { BoxMarcoInstrucciones,
         ImgMarcoInstrucciones,
         BoxContenidoMarcoInstrucciones,
         BoxLadoIzquierdoInstrucciones,
         BoxImgLadoIzquierdoInstrucciones,
         ImgsContenidoMarcoInstrucciones,
         BoxLadoDerechoInstrucciones,
         BoxImgTemporizador,
         BoxCajaInstrucciones,
         BoxTextoInstrucciones,
         TextoInstrucciones,
         BoxBotonInstrucciones,
         BotonIngresarInstrucciones  } from './../../elementos/StyledInstrucciones';


const EscenaInstrucciones = ( { estado, cambiarEstado, mostrarFooterLanding, mostrarFooterAvatar, mostrarFooterRetos, mostrarFooterInstrucciones, mostrarAvatar1, mostrarAvatar2 } ) => {

        const IniciarJuego = (e) => {
            e.preventDefault();
            cambiarEstado( {...estado, landing: 'false', usuarios: 'false', avatar: 'false', retos: 'false', instruccionR1:'false', reto1: 'true' } ); //Cambia el estado de la escenas en App.js
            console.log("Click en el boton ingresar al reto 1");
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
    
                    <BoxMarcoInstrucciones>
                        <ImgMarcoInstrucciones src = {puertaInstruccionReto1}/>
                        <BoxContenidoMarcoInstrucciones>

                            <BoxLadoIzquierdoInstrucciones>
                                <BoxImgLadoIzquierdoInstrucciones>
                                    <ImgsContenidoMarcoInstrucciones src= { mostrarAvatar1 === 'true' ? avatarUno : mostrarAvatar2 === 'true' ? avatarDos : console.log('Avatar no encontrado') } /*src= { imgInstruccionReto1 }*//>
                                </BoxImgLadoIzquierdoInstrucciones>
                            </BoxLadoIzquierdoInstrucciones>

                            <BoxLadoDerechoInstrucciones>

                                <BoxImgTemporizador>
                                    <ImgsContenidoMarcoInstrucciones src= { imgTemporizador }/>
                                </BoxImgTemporizador >

                                <BoxCajaInstrucciones>
                                    <ImgsContenidoMarcoInstrucciones src= { cajaInstruccionesReto1 }/>

                                    <BoxTextoInstrucciones>
                                        <TextoInstrucciones>
                                            El primer reto contará con un tiempo determinado. <br/><br/>
                                            En él podrás recolectar de  1 a 4 estrellas dependiendo de que tan cerca estés de la respuesta correcta.
                                        </TextoInstrucciones>
                                    </BoxTextoInstrucciones>

                                    <BoxBotonInstrucciones>
                                        <BotonIngresarInstrucciones type="button" onClick={IniciarJuego}>Ingresar</BotonIngresarInstrucciones>
                                    </BoxBotonInstrucciones>

                                </BoxCajaInstrucciones>

                            </BoxLadoDerechoInstrucciones>

                        </BoxContenidoMarcoInstrucciones>                        
                        
                    </BoxMarcoInstrucciones>

                    <Footer 
                        mostrarFooterLanding= { mostrarFooterLanding }
                        mostrarFooterAvatar= { mostrarFooterAvatar }
                        mostrarFooterRetos = { mostrarFooterRetos }
                        mostrarFooterInstrucciones= { mostrarFooterInstrucciones }
                    />
                    
                </section>
            </>
        );
    }  
        
    export default EscenaInstrucciones;