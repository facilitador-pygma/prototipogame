/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
import LogoG4T from './../logog4t/LogoG4T';
import FormRegistro from './formregistro/FormRegistro';
import FormIngreso from './formingreso/FormIngreso';


const EscenaUsuarios = ({estado, cambiarEstado}) => { //Se anexan props para saber en donde se da el paso de escena al home

    return(
        <>
            <section>

                <main> {/* Etiqueta con estilos en estilos.css*/}
                
                    { false &&
                        <LogoG4T />
                    }

                    <FormRegistro /> {/*Se llama el componente de FormRegistro.js*/}

                    <FormIngreso
                        estadoFormIngreso= {estado}
                        cambiarEstadoFormIngreso= {cambiarEstado}                
                    /> {/*Se llama el componente de FormIngreso.js, ademas de anexan alli los props de cambio de escena ya que el 
                        usuario debe dar click en el submit de Ingreso (datos corectos del form)*/}
                    
                </main>

            </section>
            
        </>
    );
}  
    
export default EscenaUsuarios;