/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Imagenes
import logoG4T from './../../../../assets/img/Logo_registro.png'

//Elementos
import { MarcoLogoG4T,
         ContenedorLineasSupG4T,
         GuionesLogoG4T,
         ContenedorLineasInfG4T,
         ContenidoMarcoLogoG4T,
         ImgLogoG4T } from './../../../../elementos/StyledLogoG4T';


const LogoG4T = () => {

    return(
        <>
            <MarcoLogoG4T>

                <ContenedorLineasSupG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                </ContenedorLineasSupG4T>

                <ContenedorLineasInfG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                    <GuionesLogoG4T></GuionesLogoG4T>
                </ContenedorLineasInfG4T>

                <ContenidoMarcoLogoG4T>
                    <ImgLogoG4T src={logoG4T}/>
                </ContenidoMarcoLogoG4T>    

            </MarcoLogoG4T>
            
        </>
    );
}  
    
export default LogoG4T;