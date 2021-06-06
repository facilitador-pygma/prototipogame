/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
    borde: '#0075ff',
    error: '#bb2929',
    exito: '#1ed12d',
}

const BoxFormulario = styled.div`
    width: 350px;
    margin: auto;
    padding: 30px;
    
    background:#ccc;
`;

const TituloFormulario = styled.p`
    color: #29003b;
    text-align: center;
    font-size: 25px;
    font-weight: bold;

`;

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px; /*Era de 20px */
`;

const Label = styled.label`
    display: block; /*Ocupa todo el ancho del BoxFormulario */
    font-weight: 700;
    padding: 10px;
    min-height: 40px; /*Es para asegurar que el input no se suba al espacio del label, es decir quede desfasado con respecto a los otros.*/
    cursor: pointer;
    
    /*Uso de las props (propiedades) en React, en este caso del estado valido para cambiar ciertos aspectos del label*/
    ${props => props.valido === 'false' && css` /*Esta linea llama a todas las propiedades del label, pero solo se usara valido*/ 
        color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90; /*Se asegura que el grupoinput quede encima del BoxFormulario */
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px; /*Coincide con el height de la linea anterios, para que lo que escribe dentro del input quede centrado */
    padding: 0 40px 0 30px;
    border: 3px solid transparent; /*Se coloca para quitar el borde por defecto que trae el elemento input */

    transition: 0.3s ease all; /*Animacion del border indicado con colores*/

    &:focus{ /*Se accede al estado focus y se coloca el color de borde al hacer click en los inputs */
        border: 3px solid ${colores.borde};
        outline: none; /*Quita el subrayado por defecto al hacer focus en el input */
        box-shadow: 3px 0 30px rgba(163,163,163, 0.4);
    }

    /*Uso de las props (propiedades) en React, en este caso del estado valido para cambiar ciertos aspectos del input*/
    ${props => props.valido === 'true' && css` /*Esta linea llama a todas las propiedades del input, pero solo se usara valido*/ 
        border: 3px solid transparent;
    `}

    ${props => props.valido === 'false' && css` /*Esta linea llama a todas las propiedades del input, pero solo se usara valido*/ 
        border: 3px solid ${colores.error} !important; /*!important este estilo tendra mas relevancia que el border de focus*/
    `}
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-top: 10px;
    color: ${colores.error};

    display: none; /*Por defecto se quiere que solo se muestre cuando el usuario esta ingresando algo por teclado en los input*/

    /*Uso de las props (propiedades) en React, en este caso del estado valido para cambiar ciertos aspectos de la leyenda error*/
    ${props => props.valido === 'true' && css` /*Esta linea llama a todas las propiedades de la leyenda error, pero solo se usara valido*/ 
        display: none; /*Para que no se muestre*/
    `}
    ${props => props.valido === 'false' && css` /*Esta linea llama a todas las propiedades del label, pero solo se usara valido*/ 
        display: block; /*Para se muestre*/
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)` /*Esta es la config de styled component al acceder a un componente y no a un elemento */
    position: absolute;
    right: 10px; /*Desplaza de derecha a izquierda */
    bottom: 14px; /*Desplaza de abajo hacia arriba */
    z-index: 100; /*Se asegura que el grupoinput quede encima del BoxFormulario y del Input */
    font-size: 16px;
    
    opacity: 0; /*Solo se a mostrar cuando se tengo un error o acierto en la validacion de los dato ingresados */

    /*Uso de las props (propiedades) en React, en este caso del estado valido para cambiar ciertos aspectos de los iconos de verificacion*/
    ${props => props.valido === 'true' && css` /*Esta linea llama a todas las propiedades de los iconos de verificacion, pero solo se usara valido*/ 
        opacity: 1;
        color: ${colores.exito};
    `}
    ${props => props.valido === 'false' && css` /*Esta linea llama a todas las propiedades del label, pero solo se usara valido*/ 
        opacity: 1;
        color: ${colores.error};
    `}

`;

const IconoInput = styled(FontAwesomeIcon)` /*Esto es la config de styled component al acceder a un componente y no a un elemento */
    position: absolute;
    left: 10px; /*Desplaza de izquierda a derecha */
    bottom: 14px; /*Desplaza de abajo hacia arriba */
    z-index: 100; /*Se asegura que el grupoinput quede encima del BoxFormulario y del Input */
    font-size: 16px;
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 20px;
    background: #f66060;
    padding: 2px 5px;
    border-radius: 3px;
   

    p{ /*Coloca una alineacion del texto centrado*/
        text-align: center;
    }

    b{ /*Deja un espacio entre el icono de warning y el inicio del texto*/
        margin-left: 5px;
    }
`;

const BoxBotonFormulario = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column; /*Mantiene el boton arriba y el texto de mensaje de exito abajo*/
`;

const BotonFormulario = styled.button`
    height: 45px;
    line-height: 45px;
    width: 50%;
    background: radial-gradient(#5e0088,#29003b);
    color: #1e90ff;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 0.5px;
    border: none; /*Quita el borde que viene por decfecto en los botones de html */
    border-radius: 3px;
    cursor: pointer;

    transition: 0.1s ease all; /*Pequeña transicion para el cambio de cualquier propiedad como efecto */

    &:hover{ /*Cuando pasen el cursor por encima del boton */
        box-shadow: 3px 0 30px rgba(163,163,163, 1);
    }
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    margin-top: 10px;
`;


export { BoxFormulario,
         TituloFormulario,
         Formulario,
         Label,
         GrupoInput,
         Input,
         LeyendaError,
         IconoValidacion,
         IconoInput,
         BoxBotonFormulario,
         BotonFormulario,
         MensajeError,
         MensajeExito };