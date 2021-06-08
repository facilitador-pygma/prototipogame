/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Componentes
import LogoG4T from './../logog4t/LogoG4T';
import Menu from './../menu/Menu';

//Imagenes
import logoEmpresa from './../../assets/img/Logo_LoginyRegistro.png';

//Elementos
import { BoxLogoG4T,
         BoxLogoEmpresa,
         ImgLogoEmpresa } from './../../elementos/StyledHome';

const EscenaAvatar = () => {

    return(  
        <>
            <section>

                <BoxLogoG4T>
                    <LogoG4T />
                </BoxLogoG4T>

                <BoxLogoEmpresa>
                    <ImgLogoEmpresa src= { logoEmpresa } />
                </BoxLogoEmpresa>
                
                <Menu />
                <h2>Empieza escena avatar</h2>
            </section>
        </>
    );
}  
    
export default EscenaAvatar;