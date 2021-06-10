/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const BoxMarcoRetos = styled.div`
    position: absolute;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items:center;

    flex-direction: column;
`;

const TituloEscenaRetos = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 2em;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 20px 0;
`;

const BoxTodosRetos = styled.div`
    width: 90%;
    height: 50%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 8px;
    padding: 0 25px 10px;
`;

const BoxReto = styled.div`
    position: relative; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    cursor: pointer;
`;

const BoxImgEscenaReto = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;

    z-index: 3;
`;

const ImgsEscenaReto = styled.img`
    top:0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover;
`;

const LeyendaEscenaReto = styled.p`
    color: #fff;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 5px;
`;

export { BoxMarcoRetos,
         TituloEscenaRetos,
         BoxTodosRetos,
         BoxReto,
         BoxImgEscenaReto,
         ImgsEscenaReto,
         LeyendaEscenaReto };