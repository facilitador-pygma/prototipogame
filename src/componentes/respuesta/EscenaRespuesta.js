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
import fondoSolucionPrueba from './../../assets/img/cuadro_Reto 1 solucionado.png';
import avatarUno from './../../assets/img/Selección_Galatea.png';
import avatarDos from './../../assets/img/Selección_EDI.png';
import imgTemporizador from './../../assets/img/Tiempo_Reto1.png';
import cajaPreguntasRetos from './../../assets/img/gráfico_instrucciones.png';
import imgEngranaje from './../../assets/img/Engranaje_premio.png';

import imgRetoUno from './../../assets/img/reto1_prueba.png';

//Elementos
import { BoxImgTemporizador,
         BoxCajaInstrucciones } from './../../elementos/StyledInstrucciones';

import { BoxLogoG4T,
         BoxLogoEmpresa,
         ImgLogoEmpresa } from './../../elementos/StyledHome';

import { BoxPrueba,
         ImgBoxPrueba,
         BoxContenidoPrueba,
         BoxLadoIzquierdoPrueba,
         BoxImgLadoIzquierdoPrueba,
         ImgsContenidoBoxPrueba,
         BoxCentralPrueba,
         BoxImgCentralPrueba,
         BoxLadoDerechoPrueba,
         ContenidoPreguntaReto,
         TextoPreguntaRetoUno,
         BoxBotonRespuesta,
         BotonEnviarRespuesta } from './../../elementos/StyledRetoUno';

import { TituloEscenaSolucion,
         BoxTextoImgCentral,
         TextoFelicitacion,
         BoxImgCentralSolucion,
         TextoGanador,
         TextoNumeroEngranaje,
         BoxTextoOpciones,
         TextoOpciones } from './../../elementos/StyledSolucionReto';


const EscenaRespuesta = ({ mostrarPremiosEngranajes, mostrarAvatar1, mostrarAvatar2}) => {
    return ( 

        <>
            <section>

                <BoxLogoG4T>
                    <LogoG4T />
                </BoxLogoG4T>
    
                <BoxLogoEmpresa>
                    <ImgLogoEmpresa src= { logoEmpresa } />
                </BoxLogoEmpresa>

                <Menu />

                <BoxPrueba>
                    <ImgBoxPrueba src = {fondoSolucionPrueba}/>

                    <BoxContenidoPrueba>

                        <BoxLadoIzquierdoPrueba>
                            <BoxImgLadoIzquierdoPrueba>
                                <ImgsContenidoBoxPrueba src= { mostrarAvatar1 === 'true' ? avatarUno : mostrarAvatar2 === 'true' ? avatarDos : console.log('Avatar no encontrado') } /*src= { imgInstruccionReto1 }*//>
                            </BoxImgLadoIzquierdoPrueba>
                        </BoxLadoIzquierdoPrueba>

                        <BoxCentralPrueba>
                            <TituloEscenaSolucion>solucion del reto</TituloEscenaSolucion>

                            <BoxTextoImgCentral>
                                <TextoFelicitacion>¡ Muy Bien ! <br/><br/><TextoGanador>Ganaste:</TextoGanador></TextoFelicitacion>
                                <TextoNumeroEngranaje>x{mostrarPremiosEngranajes}</TextoNumeroEngranaje>
                                <BoxImgCentralSolucion>
                                    <ImgsContenidoBoxPrueba src= {imgEngranaje} />
                                </BoxImgCentralSolucion>
                            </BoxTextoImgCentral>
                        </BoxCentralPrueba>

                        <BoxLadoDerechoPrueba>

                            <BoxImgTemporizador>
                                <ImgsContenidoBoxPrueba src= { imgTemporizador }/>
                            </BoxImgTemporizador >

                            <BoxCajaInstrucciones>
                                <ImgsContenidoBoxPrueba src= { cajaPreguntasRetos }/>

                                <ContenidoPreguntaReto>

                                    <TextoPreguntaRetoUno>Decide tu siguiente aventura:</TextoPreguntaRetoUno>

                                    <BoxTextoOpciones>
                                        <TextoOpciones>&#62;Construir un aliado&#60;</TextoOpciones>
                                        <TextoOpciones>&#62;Ir al siguiente reto&#60;</TextoOpciones>
                                    </BoxTextoOpciones>
                                    
                                    <BoxBotonRespuesta>
                                        <BotonEnviarRespuesta type="button">Continuar</BotonEnviarRespuesta>
                                    </BoxBotonRespuesta>
                                    
                                </ContenidoPreguntaReto>

                            </BoxCajaInstrucciones>

                        </BoxLadoDerechoPrueba>
                       

                    </BoxContenidoPrueba>

                </BoxPrueba>

            </section>

        </>

     );
}
 
export default EscenaRespuesta;