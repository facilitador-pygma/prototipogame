/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const BoxFooter = styled.div`
    position: absolute;
    width: 100%; 
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;    
`;

const ImgFooter = styled.img`
    position: relative;
    width: 100%;    
    object-fit: cover;
`;

const ContenedorTextoFooter = styled.span`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px 0px;

    text-transform: uppercase;
`;

const TextoFooter = styled.p`
    text-align: center;
    color: #fff;
    font-size: 2em;
    letter-spacing: 1px;
`;

const TextoFooter2 = styled.span`
    font-size: 0.8em;
`;

export { BoxFooter,
         ImgFooter,
         ContenedorTextoFooter,
         TextoFooter,
         TextoFooter2 };