/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Componentes
import Indicadores from './../indicadores/Indicadores';

//Creadas
import { BoxFooter,
         ImgFooter,
         ContenedorTextoFooter,
         TextoFooter,
         TextoFooter2 } from '../../elementos/StyledFooter';

//Imagenes
import imgFooter from '../../assets/img/Mensaje_Mapa.png';



const Footer = ( {mostrarFooterLanding, mostrarFooterAvatar, mostrarFooterRetos} ) => {

    return( //mostrarFooterLanding === 'true' , mostrarFooterLanding === 'false' && mostrarFooterAvatar === 'true' 
    
        <>
            {/*<footer>
                <h3>hola aqui footer</h3>
            </footer>*/}

            <BoxFooter> {/*Es un elemneto div, padre de la imagen del footer y el texto */}
                <ImgFooter src= {imgFooter}/>
                <ContenedorTextoFooter> {/*Es un span, se usa los estilos del elemento StyledInicio.js*/}
                
                    { mostrarFooterLanding === 'true' && 
                        <TextoFooter>!bienvenidos!<br/> {/*Es un p, se usa los estilos del elemento StyledInicio.js*/}
                            <TextoFooter2>edi sera tu gran aliado para potenciar tu talento en la industria 4.0</TextoFooter2>{/*Es un span, se usa los estilos del elemento StyledInicio.js*/}
                        </TextoFooter>
                    }

                    { mostrarFooterLanding === 'false' &&
                      mostrarFooterAvatar === 'true' &&
                        <TextoFooter>!bienvenidos! ahora puedes elegir tu avatar<br/> {/*Es un p, se usa los estilos del elemento StyledInicio.js*/}
                            <TextoFooter2>edi sera tu gran aliado para potenciar tu talento en la industria 4.0</TextoFooter2>{/*Es un span, se usa los estilos del elemento StyledInicio.js*/}
                        </TextoFooter>
                    }

                    { mostrarFooterLanding === 'false' &&
                      mostrarFooterAvatar === 'false' &&
                      mostrarFooterRetos === 'true' &&
                        <>
                            <Indicadores 
                                textoIndicador = "avance"    
                            />

                            <Indicadores 
                                textoIndicador = "llaves"    
                            />

                            <Indicadores 
                                textoIndicador = "Pruebas"    
                            />

                            <Indicadores 
                                textoIndicador = "estrellas"    
                            />
                        </>
                    }
                


                </ContenedorTextoFooter>
            </BoxFooter>

            
            
        </>
    );
}

export default Footer;