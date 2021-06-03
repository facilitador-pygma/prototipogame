/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const Marco = styled.div`
    position: relative;
    max-width: 90%;
    width: 1000px;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #350048;

    box-shadow: 0 15px 25px rgba(0,0,0,0.03);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, transparent, #0004);

    margin-bottom: 100px;

    &::before{
        position: absolute;
        top: -14px;
        left: 50%; /*Corre la capa un 50% a la derecha*/
        transform: translateX(-50%); /*Ayuda a centrar la capa*/
        content: '';
        height: 13px;
        width: 60vw;

        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        background: #350048;
    }

    &::after{
        position: absolute;
        bottom: -12px;
        left: 50%; /*Corre la capa un 50% a la derecha*/
        transform: translateX(-50%); /*Ayuda a centrar la capa*/
        content: '';
        height: 10px;
        width: 20vw;

        border-top: 1px solid #350048; /*Si no se pone queda visualizando una linea blanca del borde de .marco */
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;

        background: #350048;
        }
`;

const Barra = styled.div`
    width: 55vw;
    height: 5px;
    position: absolute;
    top: -2.5px;
    left: 50%;
    transform: translateX(-50%);

    background: linear-gradient(#ffa500,#ffff00);

    border-radius: 10px;
`;

const ContenedorCirculos = styled.div`
    width: 15vw;
    height: 3vh;

    position: absolute;
    bottom: -8px;
    left: 50%; /*Corre la capa un 50% a la derecha*/
    transform: translateX(-50%); /*Ayuda a centrar la capa*/

    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 2; /*Para que no se esconda detras del espacio .marco::after*/
`;

const Circulos = styled.span`
    position: relative;
    border-radius: 50%;
    background: linear-gradient(#ffa500,#ffff00);
    
    &:nth-child(1){
        width: 6px;
        height: 6px;
    }

    &:nth-child(2){
        width: 8px;
        height: 8px;
    }

    &:nth-child(3){
        width: 10px;
        height: 10px;
    }

    &:nth-child(4){
        width: 15px;
        height: 15px;
    }

    &:nth-child(5){
        width: 10px;
        height: 10px;
    }

    &:nth-child(6){
        width: 8px;
        height: 8px;
    }

    &:nth-child(7){
        width: 6px;
        height: 6px;
    }
`;

const ContenidoMarco = styled.div`
    position:relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 96%;
    height: 91%;

    background: darkorange;
    border-radius: 10px;
`;

const BoxImgFooter = styled.div`
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


export { Marco,
         Barra,
         ContenedorCirculos,
         Circulos,
         ContenidoMarco,
         BoxImgFooter,
         ImgFooter,
         ContenedorTextoFooter,
         TextoFooter,
         TextoFooter2 };