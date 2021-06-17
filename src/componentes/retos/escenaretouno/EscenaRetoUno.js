/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React, {useState} from 'react';

//Componentes
import LogoG4T from './../../logog4t/LogoG4T';
import Menu from './../../menu/Menu';
import Footer from './../../footer/Footer';

//Imagenes
import logoEmpresa from './../../../assets/img/Logo_LoginyRegistro.png';
import fondoPrueba from './../../../assets/img/cuadro_Reto 1.png';
import avatarUno from './../../../assets/img/Selección_Galatea.png';
import avatarDos from './../../../assets/img/Selección_EDI.png';
import imgTemporizador from './../../../assets/img/Tiempo_Reto1.png';
import cajaPreguntasRetos from './../../../assets/img/gráfico_instrucciones.png';

import imgRetoUno from './../../../assets/img/reto1_prueba.png';

//Elementos
import { Label } from './../../../elementos/StyledFormularios';

import { BoxImgTemporizador,
         BoxCajaInstrucciones } from './../../../elementos/StyledInstrucciones';

import { BoxLogoG4T,
         BoxLogoEmpresa,
         ImgLogoEmpresa } from './../../../elementos/StyledHome';

import { BoxPrueba,
         ImgBoxPrueba,
         BoxContenidoPrueba,
         BoxLadoIzquierdoPrueba,
         BoxImgLadoIzquierdoPrueba,
         ImgsContenidoBoxPrueba,
         BoxCentralPrueba,
         TextoRetoUno,
         BoxImgCentralPrueba,
         BoxLadoDerechoPrueba,
         ContenidoPreguntaReto,
         TextoPreguntaRetoUno,
         BoxFormularioChecked,
         BoxInputChecked,
         TextoInput,
         BoxBotonRespuesta,
         BotonEnviarRespuesta } from './../../../elementos/StyledRetoUno';


const EscenaRetoUno = ( { estado, cambiarEstado, mostrarFooterLanding, mostrarFooterAvatar, mostrarFooterRetos, mostrarFooterInstrucciones, mostrarFooterReto1, mostrarAvatar1, mostrarAvatar2, cambiarPremiosEngranajes } ) => {

    //Estados
    const [seleccionarRespuesta1, cambiarSeleccionarRespuesta1] = useState (false);
    const [seleccionarRespuesta2, cambiarSeleccionarRespuesta2] = useState (false);
    const [seleccionarRespuesta3, cambiarSeleccionarRespuesta3] = useState (false);
    const [seleccionarRespuesta4, cambiarSeleccionarRespuesta4] = useState (false);

    const onChangeRespuesta1 = (e) => {
        cambiarSeleccionarRespuesta1(e.target.checked);
        console.log("Respuesta 1: " + e.target.checked);
    }

    const onChangeRespuesta2 = (e) => {
        cambiarSeleccionarRespuesta2(e.target.checked);
        console.log("Respuesta 2: " + e.target.checked);
    }

    const onChangeRespuesta3 = (e) => {
        cambiarSeleccionarRespuesta3(e.target.checked);
        console.log("Respuesta 3: " + e.target.checked);
    }

    const onChangeRespuesta4 = (e) => {
        cambiarSeleccionarRespuesta4(e.target.checked);
        console.log("Respuesta 4: " + e.target.checked);
    }

    const validarRespuesta = (e) => {
        e.preventDefault();

        if(seleccionarRespuesta1){
            //alert("Repuesta Incorrecta");
            console.log("Repuesta Incorrecta");
            cambiarPremiosEngranajes(3);
        }

        if(seleccionarRespuesta2){
            //alert("Repuesta Incorrecta");
            console.log("Repuesta Incorrecta");
            cambiarPremiosEngranajes(1);
        }

        if(seleccionarRespuesta3){
            //alert("Repuesta Correcta");
            console.log("Repuesta Correcta");
            cambiarPremiosEngranajes(4);
        }

        if(seleccionarRespuesta4){
            //alert("Repuesta Incorrecta");
            console.log("Repuesta Incorrecta");
            cambiarPremiosEngranajes(2);
        }

        cambiarEstado( {...estado, landing: 'false', usuarios: 'false', avatar: 'false', retos: 'false', instruccionR1:'false', reto1: 'false', premio1: 'true' } ); //Cambia el estado de la escenas en App.js
        console.log("Click en el boton enviar para validar la respuesta del reto 1");
    }

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
                    <ImgBoxPrueba src = {fondoPrueba}/>

                    <BoxContenidoPrueba>

                        <BoxLadoIzquierdoPrueba>
                            <BoxImgLadoIzquierdoPrueba>
                                <ImgsContenidoBoxPrueba src= { mostrarAvatar1 === 'true' ? avatarUno : mostrarAvatar2 === 'true' ? avatarDos : console.log('Avatar no encontrado') } /*src= { imgInstruccionReto1 }*//>
                            </BoxImgLadoIzquierdoPrueba>
                        </BoxLadoIzquierdoPrueba>

                        <BoxCentralPrueba>
                            <TextoRetoUno>Contar la cantidad de cuadros y marcar la respuesta correcta</TextoRetoUno>
                            <BoxImgCentralPrueba>
                                <ImgsContenidoBoxPrueba src= {imgRetoUno} />
                            </BoxImgCentralPrueba>
                        </BoxCentralPrueba>

                        <BoxLadoDerechoPrueba>

                            <BoxImgTemporizador>
                                <ImgsContenidoBoxPrueba src= { imgTemporizador }/>
                            </BoxImgTemporizador >

                            <BoxCajaInstrucciones>
                                <ImgsContenidoBoxPrueba src= { cajaPreguntasRetos }/>

                                <ContenidoPreguntaReto>

                                    <TextoPreguntaRetoUno>Seleccione una opción:</TextoPreguntaRetoUno>
                                    <div>
                                    
                                        <BoxFormularioChecked>
                                            <Label>
                                                <BoxInputChecked>
                                                    <input type= "checkbox" name="respuesta1" id="respuesta1" checked= {seleccionarRespuesta1} onChange= {onChangeRespuesta1} />
                                                    <TextoInput>31</TextoInput>
                                                </BoxInputChecked>
                                            </Label>

                                            <Label>
                                                <BoxInputChecked>
                                                    <input type= "checkbox" name="respuesta2" id="respuesta2" checked= {seleccionarRespuesta2} onChange= {onChangeRespuesta2} />
                                                    <TextoInput>23</TextoInput>
                                                </BoxInputChecked>
                                            </Label>
                                            
                                            <Label>
                                                <BoxInputChecked>
                                                    <input type= "checkbox" name="respuesta3" id="respuesta3" checked= {seleccionarRespuesta3} onChange= {onChangeRespuesta3} />
                                                    <TextoInput>40</TextoInput>
                                                </BoxInputChecked>
                                            </Label>

                                            <Label>
                                                <BoxInputChecked>
                                                    <input type= "checkbox" name="respuesta4" id="respuesta4" checked= {seleccionarRespuesta4} onChange= {onChangeRespuesta4} />
                                                    <TextoInput>36</TextoInput>
                                                </BoxInputChecked>
                                            </Label>

                                        </BoxFormularioChecked>
                                    </div>

                                    <BoxBotonRespuesta>
                                        <BotonEnviarRespuesta type="button" onClick= {validarRespuesta}>Enviar</BotonEnviarRespuesta>
                                    </BoxBotonRespuesta>
                                    
                                </ContenidoPreguntaReto>

                            </BoxCajaInstrucciones>

                        </BoxLadoDerechoPrueba>
                       

                    </BoxContenidoPrueba>

                </BoxPrueba>

                <Footer 
                    mostrarFooterLanding= { mostrarFooterLanding }
                    mostrarFooterAvatar= { mostrarFooterAvatar }
                    mostrarFooterRetos = { mostrarFooterRetos }
                    mostrarFooterInstrucciones= { mostrarFooterInstrucciones }
                    mostrarFooterReto1 = { mostrarFooterReto1 }
                />

            </section> 
            
        </>

     );
}
 
export default EscenaRetoUno;