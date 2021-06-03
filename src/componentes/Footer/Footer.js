/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
import { BoxImgFooter,
         ImgFooter,
         ContenedorTextoFooter,
         TextoFooter,
         TextoFooter2 } from '../../elementos/StyledInicio';

//Imagenes
import imgFooter from '../../assets/img/Mensaje_Mapa.png';



const Footer = () => {

    return(
        <>
            <BoxImgFooter>
                <ImgFooter src= {imgFooter}/>
                <ContenedorTextoFooter> 
                    <TextoFooter>!bienvenidos!<br/>
                        <TextoFooter2>edi sera tu gran aliado para potenciar tu talento en la industria 4.0</TextoFooter2>
                    </TextoFooter>
                </ContenedorTextoFooter>
            </BoxImgFooter>
            
        </>
    );
}

export default Footer;