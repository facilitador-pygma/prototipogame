/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled from 'styled-components';

const colores = { /*Objeto con los colores principales */
    borde: '#0075ff',
}

const BoxMarcoSeleccionAvatar = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;
`;

const ImgMarcoSeleccionAvatar = styled.img`
    top:0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover;
`;

const BoxTituloEscenaAvatar = styled.div`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
`;

const TituloEscenaAvatar = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 2em;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
`;

const BoxAvatars = styled.div`
    position: absolute;
    width: 90%;
    height: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 200px;
`;

const BoxInputEscenaAvatar = styled.div`
    position: absolute;
    bottom: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
`;

const InputEscenaAvatar = styled.input`
    width: 20%; /*Usa todo el ancho del BoxFormulario*/
    background: #fff; /*Color de fondo del input*/
    border-radius: 3px; /*Puntas redondeadas */
    height: 35px; /*Altura del input*/
    line-height: 35px; /*Coincide con el height de la linea anterios, para que lo que escribe dentro del input quede centrado */
    padding: 0 10px; /*Espaciado interno arriba | derecha | abajo | izquierda*/
    border: 3px solid transparent; /*Se coloca para quitar el borde por defecto que trae el elemento input */

    transition: 0.3s ease all; /*Animacion del border indicado con colores*/

    &:focus{ /*Se accede al estado focus y se coloca el color de borde al hacer click en los inputs */
        border: 3px solid ${colores.borde};
        outline: none; /*Quita el subrayado por defecto al hacer focus en el input */
        box-shadow: 3px 0 30px rgba(163,163,163, 0.4);
    }
`;

export { BoxMarcoSeleccionAvatar,
         ImgMarcoSeleccionAvatar,
         BoxTituloEscenaAvatar,
         BoxAvatars,
         BoxInputEscenaAvatar,
         TituloEscenaAvatar,
         InputEscenaAvatar };