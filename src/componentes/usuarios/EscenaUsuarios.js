/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Creadas
import LogoG4T from './../logog4t/LogoG4T';
import FormRegistro from './registro/formregistro/FormRegistro';


const EscenaUsuarios = () => {

    return(
        <>

            <main>
                { false &&
                    <LogoG4T />
                }
                <FormRegistro />
            </main>
            
        </>
    );
}  
    
export default EscenaUsuarios;