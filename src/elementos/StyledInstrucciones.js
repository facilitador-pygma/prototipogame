/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const BoxMarcoInstrucciones = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;
`;

const ImgMarcoInstrucciones = styled.img`
    top:0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover;
`;

const BoxContenidoMarcoInstrucciones = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid: 30px;
    width: 100%;
    height: 100%;

    padding: 30px;

    z-index: 2;
`;

const BoxLadoIzquierdoInstrucciones = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex;
    align-items: center;
    width: 200px;
`;

const BoxImgLadoIzquierdoInstrucciones = styled.div`
    position: absolute; /*Poder manipular los hijos de esta clase o div*/
    bottom: 0;
    left: 0;
    width: 100%;
`;

const ImgsContenidoMarcoInstrucciones = styled.img`
    top: 0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover;
`;

const BoxLadoDerechoInstrucciones = styled.div`
    width: 100%;
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;

    padding: 0 0 0 110px;

    flex-direction: column;
`;

const BoxImgTemporizador = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;
    margin-bottom: 10px;
`;

const BoxCajaInstrucciones = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;

    flex-direction: column;
`;

const BoxTextoInstrucciones = styled.div`
    position: absolute; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    justify-content: center;
    width: 90%;
    height: 90%;
    padding: 15px 10px 5px;
`;

const TextoInstrucciones = styled.p`
    color: #fff;
    letter-spacing: 0.5px;
    text-align: left;
    font-size: 12px;
`;

const BoxBotonInstrucciones = styled.div`
    position: absolute; /*Poder manipular los hijos de esta clase o div*/
    display: block;
    bottom: 20PX;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
`;

const BotonIngresarInstrucciones = styled.button`
    height: 20px; /*Da una altura al boton */
    line-height: 20px; /*Importante para que el contendido quede centrado */
    width: 100px; /*Usa la mitad del ancho de su contenedor o BoxFormulario */
    background: linear-gradient(#007dc3,#30bad3); /*Color de fondo*/
    color: #290a4c; /*Color de letra*/ 
    font-size: 16px; /*Tamaño de letra*/
    font-weight: 700; /*Negrita*/
    letter-spacing: 0.5px; /*Espacio entre letras*/
    border: none; /*Quita el borde que viene por decfecto en los botones de html */
    border-radius: 3px; /*Puntas redondeadas */
    cursor: pointer; /*Convierte el cursor en tipo mano */

    transition: 0.1s ease all; /*Pequeña transicion para el cambio de cualquier propiedad como efecto */

    &:hover{ /*Cuando pasen el cursor por encima del boton */
        box-shadow: 3px 0 5px rgba(163,163,163, 1); /*Coloca una sombra */
    }
`;


export { BoxMarcoInstrucciones,
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
         BotonIngresarInstrucciones };