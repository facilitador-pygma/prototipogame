/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React, { useState } from 'react';

//Componentes
import Inputs from './../../Inputs';

//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

//Creadas
import { BoxFormulario,
         TituloFormulario,
         Formulario,
         BoxBotonFormulario,
         BotonFormulario,
         MensajeError,
         MensajeExito } from './../../../../elementos/StyledFormularios';



const FormRegistro = () => {

    //Variables de estado
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null }); //Dos estados, para ello se manejan como objetos:
                                                                           //campo: '' --> adquiere lo que se escribe del teclado en los input
                                                                           //valido --> true --> muestra el icono de check
                                                                           //           false --> muestra el icono de times y modifica el color del Inputs.js
    const [identificacion, cambiarIdentificacion] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });

    const [formularioRegistroValido, cambiarFormularioRegistroValido] = useState(null);

    //Objeto de expresiones regulares para la validacion
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios solamente, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        identificacion: /^\d{6,14}$/, // de 6 a 14 numeros.
    }

    //Definicion de la funcion onSubmitRegistro
    const onSubmitRegistro = (e) => {
        e.preventDefault(); // Para que el boton del formulario no haga nada extraño en la pagina (nviar formulario)

        //Comprobar si todos los campos son validos
        if( nombre.valido === 'true' &&
            correo.valido === 'true' &&
            identificacion.valido === 'true'
           ){
                //Se cambia el estado del formularioRegistroValido para mostrar el mensaje de exito
                cambiarFormularioRegistroValido(true);

                //Se reinician estados a sus originales
                cambiarNombre({campo: '', valido: null});
                cambiarIdentificacion({campo: '', valido: null});
                cambiarCorreo({campo: '', valido: null});

                //Agregar a la base de datos

           }else{

                //Para mostrar el mensaje de error
                cambiarFormularioRegistroValido(false);
           }
    }

    return(
        <>
            <BoxFormulario> {/*Es un elemento div, padre del formulario*/}

                <TituloFormulario>Registro</TituloFormulario> {/*Es un elemento p*/}

                <Formulario onSubmit= {onSubmitRegistro}> {/*Es un elemento form, padre de los inputs, mensaje de error y el boton submit */}
                                                          {/*onSubmit=""--> cuando se de click en boton Registrar se ejecuta una funcion */}

                    {/*Componente reutilizable de los inputs de los formularios */}
                    <Inputs
                        estadoInput={nombre}
                        cambiarEstadoInput= {cambiarNombre}

                        tipo= "text"
                        label= "Nombre completo"
                        placeholder= "Nombres y apellidos"
                        name="Nombre"
                        leyendaError= "El nombre solo puede contener letras y espacios"
                        expresionRegular= {expresiones.nombre}

                    />

                    <Inputs
                        estadoInput={identificacion}
                        cambiarEstadoInput= {cambiarIdentificacion}

                        tipo= "text"
                        label= "Identificacion"
                        placeholder= "123456789"
                        name="identificacion"
                        leyendaError= "La identificacion solo puede contener numeros y debe tener de 6 a 14 digitos"
                        expresionRegular= {expresiones.identificacion}

                    />

                    <Inputs
                        estadoInput={correo}
                        cambiarEstadoInput= {cambiarCorreo}

                        tipo= "email"
                        label= "Correo"
                        placeholder= "example@correo.com"
                        name="correo"
                        leyendaError= "El correo solo puede tener letras, numeros, puntos, guion medio y guion bajo"
                        expresionRegular= {expresiones.correo}

                    />

                    { formularioRegistroValido === false &&
                        <MensajeError> {/*Es un elemento div, padre del icono, y del mensaje de error */}
                            <p>
                                <FontAwesomeIcon icon={faExclamationTriangle} />
                                <b>Error: </b>Faltan campos del formulario de registro por diligenciar
                            </p>
                        </MensajeError>
                    }

                    <BoxBotonFormulario> {/*Es un elemento div, padre de boton y mensaje de exito */}

                        <BotonFormulario type="submit">Registrar</BotonFormulario>

                        { formularioRegistroValido === true &&

                            <MensajeExito>El registro se envio con exito</MensajeExito>
                            
                        } {/*Es un elemento p */}

                    </BoxBotonFormulario>

                </Formulario>

            </BoxFormulario>
            
        </>
    );
}  
    
export default FormRegistro;