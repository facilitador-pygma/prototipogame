/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const BoxFooter = styled.div`
    position: absolute; /*Para poder ubicar el div en la parte inferior, usando bottom y left */
    width: 100%; /*Usa todo el ancho del section */
    bottom: 0;
    left: 0;

    display: flex; /*Centra todo el contenido de este div */
    justify-content: center;
    align-items: center;
`;

const ImgFooter = styled.img`
    position: relative;
    width: 100%;    /*Ocupa todo el ancho del BoxFooter*/
    object-fit: cover;
`;

const ContenedorTextoFooter = styled.span`
    position: absolute; /*Se usa este posicionamiento para que el texto quede por encima de la imagen del footer*/

    display: flex; /*Esta linea se usa junto con las dos siguientes son para centrar en la mitad de la pantalla los componetes hijos*/
    justify-content: center;
    align-items: center;
    padding: 20px 10px 0px; /*Espacioado interno*/

    text-transform: uppercase; /*Todo el contenido en mayusculas */
`;

const TextoFooter = styled.p`
    text-align: center; /*Texto centrado en el ContenedorTextoFooter*/
    color: #fff; /*Color de letra */
    font-size: 2em; /*Tamaño de letra */
    letter-spacing: 1px; /*Espaciado en entre letras del parrafo*/
`;

const TextoFooter2 = styled.span`
    font-size: 0.8em; /*Tamaño de letra */
`;

export { BoxFooter,
         ImgFooter,
         ContenedorTextoFooter,
         TextoFooter,
         TextoFooter2 };