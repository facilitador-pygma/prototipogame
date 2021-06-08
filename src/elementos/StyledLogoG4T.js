/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const MarcoLogoG4T = styled.div`
    position: relative;
    max-width: 300px;
    width: 100%;
    height: 100px;
    
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

    &::before{ /*Capa de la punta derecha */
        content: '';
        position: absolute;
        right: -25px; /*Ubica la capa before de infinite en la mitad del contenedoor*/
        transform: translateY(-50%);

        width: 65px; 
        height: 65px; 
        background: #350048;/*#428bca;*/
        transform: rotate(45deg);
        border-top-right-radius: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.25);
    }

    &::after{ /*Capa de la punta izquierda */
        content: '';
        position: absolute;
        left: -25px; /*Ubica la capa before de infinite en la mitad del contenedoor*/
        transform: translateY(-50%);

        width: 65px; 
        height: 65px; 
        background: #350048;
        transform: rotate(45deg);
        border-bottom-left-radius: 20px;
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }
`;

const ContenedorLineasSupG4T = styled.div` /*Contenedor para las lineas superiores del logoG4T*/
    width: 20vw;
    height: 5px;

    position: absolute;
    top: 10px;
    left: 50%; /*Corre la capa un 50% a la derecha*/
    transform: translateX(-50%); /*Ayuda a centrar la capa*/

    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1; /*Se pone para que el div ContenedorLineasSupG4T no se esconda detras de las capas before y after MarcoLogoG4T*/
`;

const ContenedorLineasInfG4T = styled.div` /*Contenedor para las lineas superiores del logoG4T*/
    width: 20vw;
    height: 5px;

    position: absolute;
    bottom: 10px;
    left: 50%; /*Corre la capa un 50% a la derecha*/
    transform: translateX(-50%); /*Ayuda a centrar la capa*/

    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1; /*Se pone para que el div ContenedorLineasInfG4T no se esconda detras de las capas before y after MarcoLogoG4T*/
`;

const GuionesLogoG4T = styled.span`
    position: relative;
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(#ffa500,#ffff00);
    
    &:nth-child(1){
        width: 10px;
    }

    &:nth-child(2){
        width: 10px;
    }

    &:nth-child(3){
        width: 10px;
    }

    &:nth-child(4){
        width: 10px;
    }

    &:nth-child(5){
        width: 10px;
    }

    &:nth-child(6){
        width: 115px;
    }

    &:nth-child(7){
        width: 10px;
    }

    &:nth-child(8){
        width: 10px;
    }

    &:nth-child(9){
        width: 10px;
    }

    &:nth-child(10){
        width: 10px;
    }

    &:nth-child(11){
        width: 10px;
    }
`;

const ContenidoMarcoLogoG4T = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;

    width: 290px;

    z-index: 3;
`;

const ImgLogoG4T = styled.img`
    top:0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover; /*object-fit, redimensiona una imagen o video para ajustarse a su contenedor.*/
                /*cover, el contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento. Si la relación de aspecto del objeto no coincide con la relación de aspecto de su caja, entonces el objeto se recortará para que se ajuste*/
`;


export { MarcoLogoG4T,
         ContenedorLineasSupG4T,
         GuionesLogoG4T,
         ContenedorLineasInfG4T,
         ContenidoMarcoLogoG4T,
         ImgLogoG4T };