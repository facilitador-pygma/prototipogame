/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled from 'styled-components';

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
    width: 240px;
`;

const BoxImgLadoIzquierdoPrueba = styled.div`
    position: absolute; /*Poder manipular los hijos de esta clase o div*/
    bottom: 20px;
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
    font-size: 24px;
    margin-bottom: 15px;
`;

const BoxImgCentralPrueba = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    top: 0;
    left: 0;
    width: 250px;
`;

const BoxLadoDerechoPrueba = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    padding: 10px;
`;

const ContenidoPreguntaReto = styled.div`
    position: absolute; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;

    flex-direction: column;
    padding: 5px 10px;
`;

const TextoPreguntaRetoUno = styled.p`
    color: #fff;
    letter-spacing: 0.5px;
    text-align: left;
    font-size: 16px;
    margin-bottom: 15px;
`;

const BoxFormularioChecked = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`;

const BoxInputChecked = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        margin-right: 10px;
    }    
`;

const TextoInput = styled.p`
    color: #fff;
    letter-spacing: 0.5px;
    font-size: 16px;
`;

const BoxBotonRespuesta = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const BotonEnviarRespuesta = styled.button`
    height: 20px; /*Da una altura al boton */
    line-height: 20px; /*Importante para que el contendido quede centrado */
    width: 100px; /*Usa la mitad del ancho de su contenedor o BoxFormulario */
    background: linear-gradient(#007dc3,#30bad3); /*Color de fondo*/
    color: #290a4c; /*Color de letra*/ 
    font-size: 16px; /*Tamaño de letra*/
    font-weight: 700; /*Negrita*/
    letter-spacing: 0.5px; /*Espacio entre letras*/
    border: none; /*Quita el borde que viene por decfecto en los botones de html */
    border-radius: 3px; /*Puntas redondeadas */
    cursor: pointer; /*Convierte el cursor en tipo mano */

    transition: 0.1s ease all; /*Pequeña transicion para el cambio de cualquier propiedad como efecto */

    &:hover{ /*Cuando pasen el cursor por encima del boton */
        box-shadow: 3px 0 5px rgba(163,163,163, 1); /*Coloca una sombra */
    }
`;

export { BoxPrueba,
         ImgBoxPrueba,
         BoxContenidoPrueba,
         BoxLadoIzquierdoPrueba,
         BoxImgLadoIzquierdoPrueba,
         ImgsContenidoBoxPrueba,
         BoxCentralPrueba,
         TextoRetoUno,
         BoxImgCentralPrueba,
         BoxLadoDerechoPrueba,
         ContenidoPreguntaReto,
         TextoPreguntaRetoUno,
         BoxFormularioChecked,
         BoxInputChecked,
         TextoInput,
         BoxBotonRespuesta,
         BotonEnviarRespuesta };