/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const MarcoIndicadores = styled.div`
    position: relative;
    width: 200px;
    height: 60px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: #350048;

    box-shadow: 0 15px 25px rgba(0,0,0,0.03);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);

    border-radius: 20px;

    padding: 5px 7px;

    margin: 0 30px 0 20px;

    &::before{ /*Punta derecha */
        content: '';
        position: absolute;
        right: -11.4px; /*Ubica la capa before de infinite en la mitad del contenedoor*/
        transform: translateY(-50%);

        width: 37px; 
        height: 37px; 
        background: #350048;
        transform: rotate(45deg);
        border-top-right-radius: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.25);
    }

    &::after{ /*Punta izquierda */
        content: '';
        position: absolute;
        left: -11.4px; /*Ubica la capa before de infinite en la mitad del contenedoor*/
        transform: translateY(-50%);

        width: 37px; 
        height: 37px; 
        background: #350048;
        transform: rotate(45deg);
        border-bottom-left-radius: 20px;
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }
`;

const BoxLineasSupIndicadores = styled.div` /*Contenedor para las lineas superiores del logoG4T*/
    width: 85%;
    height: 5px;
    position: absolute;
    top: 5px;
    left: 50%; /*Corre la capa un 50% a la derecha*/
    transform: translateX(-50%); /*Ayuda a centrar la capa*/

    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1; /*Se pone para que el div ContenedorLineasSupG4T no se esconda detras de las capas before y after MarcoLogoG4T*/
`;

const BoxLineasInfIndicadores = styled.div` /*Contenedor para las lineas superiores del logoG4T*/
    width: 85%;
    height: 5px;
    position: absolute;
    bottom: 5px;
    left: 50%; /*Corre la capa un 50% a la derecha*/
    transform: translateX(-50%); /*Ayuda a centrar la capa*/

    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1; /*Se pone para que el div ContenedorLineasSupG4T no se esconda detras de las capas before y after MarcoLogoG4T*/
`;

const GuionesIndicadores = styled.span`
    position: relative;
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(#ffa500,#ffff00);
    
    &:nth-child(1){
        width: 5px;
    }

    &:nth-child(2){
        width: 5px;
    }

    &:nth-child(3){
        width: 5px;
    }

    &:nth-child(4){
        width: 5px;
    }

    &:nth-child(5){
        width: 5px;
    }

    &:nth-child(6){
        width: 80px;
    }

    &:nth-child(7){
        width: 5px;
    }

    &:nth-child(8){
        width: 5px;
    }

    &:nth-child(9){
        width: 5px;
    }

    &:nth-child(10){
        width: 5px;
    }

    &:nth-child(11){
        width: 5px;
    }
`;

const BoxContenidoMarcoIndicadores = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`;

const BoxTextoIcono = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    z-index: 2;
`;

const TituloIndicador = styled.p`
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    font-size: 1.2em;
    
    margin-right: 10px;
`;

const BoxBarraAvanceIndicador = styled.div`
    position: relative;
    width: 90%;
    height: 10px;
    background: #f0f0f0;
    border-radius: 5px;
    
    margin-bottom: 3px;

    z-index: 2; 
`;

const BarraAvanceIndicador = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 90%;
    background: #03a9f4;
    border-radius: 5px
`;

const PorcentajeAvanceIndicador = styled.p`
    text-transform: uppercase;
    height: 100%;
    color: #fff;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export { MarcoIndicadores,
         BoxLineasSupIndicadores,
         GuionesIndicadores,
         BoxLineasInfIndicadores,
         BoxContenidoMarcoIndicadores,
         BoxTextoIcono,
         TituloIndicador,
         BoxBarraAvanceIndicador,
         BarraAvanceIndicador,
         PorcentajeAvanceIndicador };