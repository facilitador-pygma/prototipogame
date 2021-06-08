/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const BoxLogoG4T = styled.div`
    display: block;
    position: relative; 
    /*position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%); /*Ayuda a centrar la capa*/
    margin-top: 10px;    
`;

const BoxLogoEmpresa = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;

    margin: 10px;

    z-index: 3;

    @media screen and (max-width: 830px){
        grid-template-columns: 1fr 3fr;
    }

    @media screen and (max-width: 700px){
        grid-template-columns: 1fr 2fr;
    }

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr 1fr;
    }
`;

const ImgLogoEmpresa = styled.img`
    top: 0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover;
`;

export { BoxLogoG4T,
         BoxLogoEmpresa,
         ImgLogoEmpresa };