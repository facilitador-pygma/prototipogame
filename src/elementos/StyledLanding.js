/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

const Marco = styled.div`
    position: relative;
    width: 900px;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(180deg,#170126,#55038c,#170126,#55038c);

    box-shadow: 0 15px 25px rgba(0,0,0,0.03);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, transparent, #0004);

    margin-bottom: 80px;

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

        background: #170126;
    }

    &::after{
        position: absolute;
        bottom: -12px;
        left: 50%; /*Corre la capa un 50% a la derecha*/
        transform: translateX(-50%); /*Ayuda a centrar la capa*/
        content: '';
        height: 10px;
        width: 20vw;

        border-top: 1px solid #55038c; /*Si no se pone queda visualizando una linea blanca del borde de .marco */
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;

        background: #55038c;
    }

    @media (max-width:800px){
        margin-bottom: 50px;
    }
`;

const Barra = styled.div`
    width: 55vw;
    height: 5px;
    position: absolute;
    top: -2.5px;
    left: 50%;
    transform: translateX(-50%);

    background: linear-gradient(90deg,#fbb03b,#fcee21);

    border: 1px solid rgba(255,255,255, 0.1);

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
    background: linear-gradient(90deg,#fbb03b,#fcee21);
    border: 1px solid rgba(255,255,255, 0.1);
    
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

    background: linear-gradient(90deg,#170126,#2c0745);
    border: 1px solid rgba(255,255,255, 0.1);
    border-radius: 10px;

    cursor: pointer;
`;

const ImgContenidoMarco = styled.img`
    top:0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover; /*object-fit, redimensiona una imagen o video para ajustarse a su contenedor.*/
                /*cover, el contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento. Si la relación de aspecto del objeto no coincide con la relación de aspecto de su caja, entonces el objeto se recortará para que se ajuste*/
`;


export { Marco,
         Barra,
         ContenedorCirculos,
         Circulos,
         ContenidoMarco,
         ImgContenidoMarco };