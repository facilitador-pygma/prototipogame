/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const TituloEscenaSolucion = styled.p`
    color: #30bad3;
    font-weight: 700;
    font-size: 2em;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 20px 0;
`;

const BoxTextoImgCentral = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 85%;
    height: 65%;
    background: linear-gradient(90deg,#55038c,#170126);
`;

const TextoFelicitacion = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 1em;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
`;

const TextoGanador = styled.span`
    font-weight: 300;
    font-size: 16px;
`;

const TextoNumeroEngranaje = styled.p`
    color: #fff;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 20px;
`;

const BoxImgCentralSolucion = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    top: 0;
    left: 0;
    width: 100px;
`;

const BoxTextoOpciones = styled.div`
    position: relative;
    display: flex;
    justify-content:center;
    align-items: center;

    flex-direction: column;

    margin: 20px 0;
`;

const TextoOpciones = styled.p`
    color: #30bad3;
    font-size: 15px;
    margin-bottom: 7px;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`;

export { TituloEscenaSolucion,
         BoxTextoImgCentral,
         TextoFelicitacion,
         BoxImgCentralSolucion,
         TextoGanador,
         TextoNumeroEngranaje,
         BoxTextoOpciones,
         TextoOpciones };