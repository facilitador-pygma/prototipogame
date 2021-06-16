/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const BoxPrueba = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;
`;

const ImgBoxPrueba = styled.img`
    top:0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover;
`;

const BoxContenidoPrueba = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    height: 100%;

    padding: 30px;
    
    z-index: 2;
`;

const BoxLadoIzquierdoPrueba = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex;
    align-items: center;
    padding: 10px;
    width: 180px;
`;

const BoxImgLadoIzquierdoPrueba = styled.div`
    position: absolute; /*Poder manipular los hijos de esta clase o div*/
    bottom: 0;
    left: 0;
    width: 100%;
`;

const ImgsContenidoBoxPrueba = styled.img`
    top: 0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover;
`;

const BoxCentralPrueba = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 100%;
`;

const TextoRetoUno = styled.p`
    color: #fff;
    letter-spacing: 0.5px;
    text-align: center;
    font-size: 16px;
    margin-bottom: 15px;
`;

const BoxImgCentralPrueba = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    top: 0;
    left: 0;
    width: 200px;
`;

export { BoxPrueba,
         ImgBoxPrueba,
         BoxContenidoPrueba,
         BoxLadoIzquierdoPrueba,
         BoxImgLadoIzquierdoPrueba,
         ImgsContenidoBoxPrueba,
         BoxCentralPrueba,
         TextoRetoUno,
         BoxImgCentralPrueba };