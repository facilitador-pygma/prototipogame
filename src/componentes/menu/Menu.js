/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Componentes
import ListasMenu from './ListasMenu';

//Elementos
import { HeaderMenu,
         NavigationMenu } from '../../elementos/StyledMenu';

const Menu = () => {
    return ( 

        <>
            <HeaderMenu> {/*Elemento header */}
    
                <NavigationMenu> {/*Elemento ul */}

                    <ListasMenu tituloenlace= "inicio" />
                    <ListasMenu tituloenlace= "avatar" />
                    <ListasMenu tituloenlace= "score" />
                    <ListasMenu tituloenlace= "tienda" />

                </NavigationMenu>

            </HeaderMenu>

        </>

     );
}
 
export default Menu;