/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React, { useState } from 'react';

//Componentes
import Inputs from './../Inputs';

//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

//Imagenes
import logoG4T from './../../../assets/img/G4T_Logo_Login.png';
import logoEmpresa from './../../../assets/img/G4T_LogoPYG_login.png';

//Creadas
import { BoxFormularioIngreso,
         TituloFormularioLogin,
         Formulario,
         BoxBotonFormulario,
         BotonFormularioLogin,
         MensajeError,
         MensajeExito,
         BoxImgLogin,
         ImgsFormularios,
         BoxImgLogoEmpresa } from './../../../elementos/StyledFormularios';



const FormIngreso = ( {estadoFormIngreso, cambiarEstadoFormIngreso} ) => { //Se anexan props heredados para saber en donde se da el paso de escena al home

    //Variables de estado
    const [usuario, cambiarUsuario] = useState({ campo: '', valido: null }); //Dos estados, para ello se manejan como objetos:
                                                                           //campo: '' --> adquiere lo que se escribe del teclado en los input
                                                                           //valido --> true --> muestra el icono de check
                                                                           //           false --> muestra el icono de times y modifica el color del Inputs.js
    const [password, cambiarPassword] = useState({ campo: '', valido: null });

    const [formularioIngresoValido, cambiarFormularioIngresoValido] = useState(null);

    //Objeto de expresiones regulares para la validacion
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo, de 4 a 16 digitos
        password: /^.{4,12}$/, // de 4 a 12 digitos.
    }

    //Definicion de la funcion onSubmitLogin
    const onSubmitLogin = (e) => {
        e.preventDefault(); // Para que el boton del formulario no haga nada extraño en la pagina (nviar formulario)

        //Comprobar si todos los campos son validos
        if( usuario.valido === 'true' &&
            password.valido === 'true'
           ){
                //Se cambia el estado del formularioLoginValido para mostrar el mensaje de exito
                cambiarFormularioIngresoValido(true);

                //Se reinician estados a sus originales
                cambiarUsuario({campo: '', valido: null});
                cambiarPassword({campo: '', valido: null});

                //Agregar a la base de datos
                cambiarEstadoFormIngreso( {...estadoFormIngreso, landing: 'false', usuarios: 'false', avatar: 'true'} );
                console.log('cambiando estado desde el submit del formulario del login');

           }else{

                //Para mostrar el mensaje de error
                cambiarFormularioIngresoValido(false);
           }
    }


    return(

        <>
            <BoxFormularioIngreso> {/*Es un elemento div, padre del formulario, titulo e imagen*/}

                <TituloFormularioLogin>Login</TituloFormularioLogin> {/*Es un elemento p*/}

                <BoxImgLogin> {/*Es un elemento div*/}
                    
                    <ImgsFormularios src={logoG4T}/>

                </BoxImgLogin>

                <Formulario onSubmit= {onSubmitLogin}> {/*Es un elemento form, padre de los inputs, mensaje de error y el boton submit */}
                                                        {/*onSubmit=""--> cuando se de click en boton Ingresar se ejecuta una funcion */}

                    {/*Componente reutilizable de los inputs de los formularios */}
                    <Inputs
                        estadoInput={usuario}
                        cambiarEstadoInput= {cambiarUsuario}

                        tipo= "text"
                        placeholder= "Usuario"
                        name="usuario"
                        leyendaError= "El usuario debe ser de 4 a 16 dígitos y solo puede contener números, letras y guion bajo"
                        expresionRegular= {expresiones.usuario}

                    />

                    <Inputs
                        estadoInput={password}
                        cambiarEstadoInput= {cambiarPassword}

                        tipo= "password"
                        placeholder= "Contraseña"
                        name="password"
                        leyendaError= "La contraseña tiene que ser de 4 a 12 dí32gitos"
                        expresionRegular= {expresiones.password}

                    />

                    { formularioIngresoValido === false &&
                        <MensajeError> {/*Es un elemento div, padre del icono, y del mensaje de error */}
                            <p>
                                <FontAwesomeIcon icon={faExclamationTriangle} />
                                <b>Error: </b>Faltan campos del formulario de login por diligenciar
                            </p>
                        </MensajeError>
                    } {/*Segun el valor que tenga este estado muestra un mensaje de error */}

                    <BoxBotonFormulario> {/*Es un elemento div, padre de boton y mensaje de exito */}

                        <BotonFormularioLogin type="submit">Ingresar</BotonFormularioLogin>

                        { formularioIngresoValido === true &&

                            <MensajeExito> {/*Es un elemento p*/}
                                El login se realizó correctamente 
                            </MensajeExito> 
                            
                        } {/* Segun el valor que tenga este estado muestra un mensaje de exito */}

                    </BoxBotonFormulario>

                </Formulario>

                <BoxImgLogoEmpresa> {/*Es un elemento div*/}
                    
                    <ImgsFormularios src={logoEmpresa}/>

                </BoxImgLogoEmpresa>

            </BoxFormularioIngreso>
        </>

    );
}

export default FormIngreso;