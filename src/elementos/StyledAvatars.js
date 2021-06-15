/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const BoxImgAvatar = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;
    
    width: 200px;
    height: 200px;

    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    z-index: 3;
`;

const ImgsAvatars= styled.img`
    position: absolute;
    top: 0;
    left: 0;
    
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/
    object-fit: cover;

    cursor: pointer;   
`;

export { BoxImgAvatar,
         ImgsAvatars };