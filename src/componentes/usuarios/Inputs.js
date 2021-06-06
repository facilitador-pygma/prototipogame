/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Instaladas
import { faTimesCircle, faCheckCircle, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Creadas
import { Label,
         GrupoInput,
         Input,
         LeyendaError,
         IconoValidacion,
         IconoInput } from './../../elementos/StyledFormularios';



const Inputs = ( { estadoInput, cambiarEstadoInput, tipo, label, placeholder, name, leyendaError, expresionRegular } ) => { //Recibe las props ingresadas en el componente desde FormRegistro.js

    //Defincion de la funcion onChange
    const onChange = (e) => { //e, recibe el evento en este caso cuando se digita con el teclado

        //console.log(e.target.value); //En el input no se visualiza la escritura pero en clg si muestra la tecla presionada

        cambiarEstadoInput({... estadoInput, campo: e.target.value}); //Crea un objeto que me permitira visualizar lo ingresado en input
                                                                      //...estadoInput --> coje todos los valores previos de las propiedades del estado para poder sobreescribirlas (campo y valido)
                                                                      //campo: e.target.value --> sobreescribe lo que se va ingresando por teclado, lo guarda y muestra
    }

    //Defincion de la funcion validacion
    const validacion = () => {
        //Primero verifica si se envia la prop de expresionRegular en el componenteinput
      if(expresionRegular){

        if(expresionRegular.test(estadoInput.campo)){ //test() --> comprueba un valor almacenado contra la formula , en este caso comprueba la guardado por teclado y lo compara con una expresionRegular
            //console.log("input correcto");

            //Se coloca codigo cuendo la ingresado por input sea correcto, haciendo uso de la propiedad de estado valido
            cambiarEstadoInput({... estadoInput, valido: 'true' }); //valido: 'true' --> no es un booleano es una cadena de string, solo por que en style component no lo reconoce

        }else{

            //console.log("input incorrecto");

            //Se coloca codigo cuendo la ingresado por input sea incorrecto, haciendo uso de la propiedad de estado valido
            cambiarEstadoInput({... estadoInput, valido: 'false' });
            
        }
      }
    }

    return(
        <>

            <div> {/*Es un elemento div, padre de label, grupoinput y leynda error */}

                <Label htmlFor={name} valido= {estadoInput.valido}>{label}</Label> {/*Es un elemento label,
                                                                                      htmlFor del label debe coincidir con el id del input 
                                                                                      valido, es un propiedad que me permite cambiar el color del label segun sea falso o verdadera*/}

                <GrupoInput> {/*Es un elemento div con posicionamiento relativo encierra los iconos y el input; esto para trabajar los iconos dentro del input con un posicionamiento absoluto*/}

                    <IconoInput icon={ tipo !== 'text' ? faEnvelope : faUser } />

                    <Input 
                        type={tipo} 
                        placeholder={placeholder} 
                        id={name}

                        value= {estadoInput.campo}
                        onChange= {onChange}

                        onKeyUp= {validacion}
                        onBlur= {validacion}

                        valido= {estadoInput.valido}

                    /> {/*Es un elemento input */}
                       {/*value me permite guardar en el estado lo ingresado por teclado en los inputs
                           onChange, tendra una funcion para cambiar el estado del input y mostrarlo
                           onKeyUp, evento cuando se suelta una tecla despeusde haberla presionado
                           onBlur, evento cuando se da click por fuera del formulario
                           valido, es una propiedad que me permitira hacer un feedback al usuario si lo ques esta ingresando en el formulario es correcto o no
                        */}

                    <IconoValidacion 
                        icon={ estadoInput.valido === 'true' ? faCheckCircle : faTimesCircle }
                        valido= {estadoInput.valido} 
                    
                    /> {/*valido, es un propiedad que me permite cambiar los iconos de validacion y el color segun sea falso o verdadera*/}

                </GrupoInput>

                <LeyendaError valido= {estadoInput.valido}>{leyendaError}</LeyendaError> {/*Es un elemento p 
                                                                                            valido, es un propiedad que me permite cambiar el color del label segun sea falso o verdadera*/}

            </div>
            
        </>
    );
}  
    
export default Inputs;