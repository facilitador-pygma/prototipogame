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


const EscenaInstrucciones = ( { mostrarFooterLanding, mostrarFooterAvatar, mostrarFooterRetos, mostrarFooterInstrucciones } ) => {


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
                                    <ImgsContenidoMarcoInstrucciones src= { imgInstruccionReto1 }/>
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
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, voluptates,
                                            debitis dicta quibusdam praesentium deserunt id amet vel,maxime at labore doloribus voluptate.
                                            Sit magni dignissimos vitae maxime est debitis.
                                        </TextoInstrucciones>
                                    </BoxTextoInstrucciones>

                                    <BoxBotonInstrucciones>
                                        <BotonIngresarInstrucciones type="button">Ingresar</BotonIngresarInstrucciones>
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