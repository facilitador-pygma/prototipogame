/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = { /*Objeto con los colores principales */
    borde: '#0075ff',
    error: '#bb2929',
    exito: '#1ed12d',
}

const BoxFormulario = styled.div` /*Setting a cada espacio donde ese encuentra el formulario */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    width: 350px; /*Ancho de cada BoxFormulario*/
    margin: 30px; /*Espaciado externo */
    padding: 20px; /*Espaciado interno */

    box-shadow: 0 5px 20px rgba(0,0,0,0.5); /*Sombras */
    border-radius: 20px;

    background:#ccc; /*Color de fondo */
`;

const BoxLogo = styled.span`
    display: block;
    position: absolute;
    top: -90px;
    left: 6%;
`;

const TituloFormularioRegistro = styled.p`
    color: #29003b; /*Color del letra*/
    text-align: center; /*Texto centrado con respecto al BoxFormulario */
    font-size: 25px; /*Tamaño de letra */
    font-weight: bold; /*Negrita */
`;

const TituloFormularioLogin = styled.p`
    color: #fff; /*Color del letra*/
    text-align: center; /*Texto centrado con respecto al BoxFormulario */
    font-size: 25px; /*Tamaño de letra */
    font-weight: bold; /*Negrita */
`;

const BoxImgLogin = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;

    /*width: 290px;*/
    margin-top: 10px;

    z-index: 3;
`;

const ImgsFormularios = styled.img`
    top:0; /*Fija arriba*/
    left: 0;
    width: 100%; /*Ajuste al ancho total del contenedor .imgBox*/
    height: 100%; /*Ajuste a la altura total del contenedor .imgBox*/

    /*Hasta aca la imagen quedaba desproporcionada, es decir, aplastada*/

    object-fit: cover;
`;

const Formulario = styled.form`
    display: grid; /*Display tipo fila-columna */
    grid-template-columns: 1fr; /*Ubica los elementos espaciados igualmente en una columna*/
    gap: 10px; /*Espacio entre filas y columnas, era de 20px */
`;

const Label = styled.label`
    display: block; /*Ocupa todo el ancho del BoxFormulario */
    font-weight: 700; /*Negrita de la fuente seleccioanda*/
    padding: 10px; /*Espaciado interno */
    /*min-height: 40px; /*Es para asegurar que el input no se suba al espacio del label, es decir quede desfasado con respecto a los otros.*/
    cursor: pointer; /*Convierte el cursor en tipo mano */
    
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
    width: 100%; /*Usa todo el ancho del BoxFormulario*/
    background: #fff; /*Color de fondo del input*/
    border-radius: 3px; /*Puntas redondeadas */
    height: 45px; /*Altura del input*/
    line-height: 45px; /*Coincide con el height de la linea anterios, para que lo que escribe dentro del input quede centrado */
    padding: 0 40px 0 30px; /*Espaciado interno arriba | derecha | abajo | izquierda*/
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
    font-size: 12px; /*Tamaño de letra*/
    margin-top: 10px; /*Espacio externo superior */
    color: ${colores.error}; /*Color de letra*/

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
    font-size: 16px; /*Tamaño de letra*/
    
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
    font-size: 16px; /*Tamaño de letra*/
`;

const MensajeError = styled.div`
    height: 45px; /*Altura del mensaje error*/
    line-height: 20px; /*Para que el texto al interior quede centrado*/
    background: #f66060; /*Color de fondo */
    padding: 2px 5px; /*Espaciado interno arriba-abajo | derecha-izquierda */
    border-radius: 3px; /*Puntas redondeadas */
   

    p{ /*Coloca una alineacion del texto centrado*/
        text-align: center;
    }

    b{ /*Deja un espacio entre el icono de warning y el inicio del texto*/
        margin-left: 5px;
    }
`;

const BoxBotonFormulario = styled.div`
    display: flex; /*Esta linea se usa junto con las siguientes dos para centrar en la mitad de la pantalla los componetes hijos*/
    align-items: center;
    justify-content: center; 
    flex-direction: column; /*Mantiene el boton arriba y el texto de mensaje de exito abajo*/
`;

const BotonFormulario = styled.button`
    height: 45px; /*Da una altura al boton */
    line-height: 45px; /*Importante para que el contendido quede centrado */
    width: 50%; /*Usa la mitad del ancho de su contenedor o BoxFormulario */
    background: radial-gradient(#5e0088,#29003b); /*Color de fondo*/
    color: #1e90ff; /*Color de letra*/
    font-size: 25px; /*Tamaño de letra*/
    font-weight: bold; /*Negrita*/
    letter-spacing: 0.5px; /*Espacio entre letras*/
    border: none; /*Quita el borde que viene por decfecto en los botones de html */
    border-radius: 3px; /*Puntas redondeadas */
    cursor: pointer; /*Convierte el cursor en tipo mano */

    transition: 0.1s ease all; /*Pequeña transicion para el cambio de cualquier propiedad como efecto */

    &:hover{ /*Cuando pasen el cursor por encima del boton */
        box-shadow: 3px 0 30px rgba(163,163,163, 1); /*Coloca una sombra */
    }
`;

const MensajeExito = styled.p`
    font-size: 14px; /*Tamaño de letra*/
    color: ${colores.exito}; /*Color de letra*/
    margin-top: 10px; /*Espacio externo parte superior*/
`;

const BoxImgLogoEmpresa = styled.div`
    position: relative; /*Poder manipular los hijos de esta clase o div*/
    display: flex; /*Coloca una al lado del otro lo elementos hijos*/
    align-items: center;/*Estos dos lineas centran la imagen*/
    justify-content: center;

    /*width: 233px;*/
    margin-top: 10px;

    z-index: 3;
`;

export { BoxFormulario,
         TituloFormularioRegistro,
         TituloFormularioLogin,
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
         MensajeExito,
         BoxLogo,
         BoxImgLogin,
         ImgsFormularios,
         BoxImgLogoEmpresa };