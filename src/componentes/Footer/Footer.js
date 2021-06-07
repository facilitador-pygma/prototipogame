/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
import { BoxFooter,
         ImgFooter,
         ContenedorTextoFooter,
         TextoFooter,
         TextoFooter2 } from '../../elementos/StyledFooter';

//Imagenes
import imgFooter from '../../assets/img/Mensaje_Mapa.png';



const Footer = () => {

    return(
        <>
            {/*<footer>
                <h3>hola aqui footer</h3>
            </footer>*/}

            <BoxFooter> {/*Es un elemneto div, padre de la imagen del footer y el texto */}
                <ImgFooter src= {imgFooter}/>
                <ContenedorTextoFooter> {/*Es un span, se usa los estilos del elemento StyledInicio.js*/}
                    <TextoFooter>!bienvenidos!<br/> {/*Es un p, se usa los estilos del elemento StyledInicio.js*/}
                        <TextoFooter2>edi sera tu gran aliado para potenciar tu talento en la industria 4.0</TextoFooter2>{/*Es un span, se usa los estilos del elemento StyledInicio.js*/}
                    </TextoFooter>
                </ContenedorTextoFooter>
            </BoxFooter>

            
            
        </>
    );
}

export default Footer;