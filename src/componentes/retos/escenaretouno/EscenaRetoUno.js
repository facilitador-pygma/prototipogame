/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Componentes
import LogoG4T from './../../logog4t/LogoG4T';

//Imagenes
import logoEmpresa from './../../../assets/img/Logo_LoginyRegistro.png';
import fondoPrueba from './../../../assets/img/Caja_Selección avatar.png';
import avatarUno from './../../../assets/img/G4T_Avatar_Galatea.png';
import avatarDos from './../../../assets/img/G4T_Avatar_EDI_ufo.png';

import imgRetoUno from './../../../assets/img/reto1_prueba.png';

//Elementos
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
         BoxImgCentralPrueba } from './../../../elementos/StyledRetoUno';


const EscenaRetoUno = ( { mostrarAvatar1, mostrarAvatar2 } ) => {
    return ( 

        <>
            <section>

                <BoxLogoG4T>
                    <LogoG4T />
                </BoxLogoG4T>
    
                <BoxLogoEmpresa>
                    <ImgLogoEmpresa src= { logoEmpresa } />
                </BoxLogoEmpresa>

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
                       

                    </BoxContenidoPrueba>

                </BoxPrueba>

            </section> 
            
        </>

     );
}
 
export default EscenaRetoUno;