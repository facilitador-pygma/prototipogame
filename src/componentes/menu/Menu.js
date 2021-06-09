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

/*const link = {
    inicio: '/escenainicio',
    avatar: '/escenaavatar',
}

console.log(link.avatar);*/

const Menu = () => {
    return ( 

        <>
            <HeaderMenu> {/*Elemento header */}
    
                <NavigationMenu> {/*Elemento ul */}

                    <ListasMenu tituloenlace= "inicio" /*linkMenu= {link.inicio}*/ />
                    <ListasMenu tituloenlace= "avatar" /*linkMenu= {link.avatar}*/ />
                    <ListasMenu tituloenlace= "score" />
                    <ListasMenu tituloenlace= "tienda" />

                </NavigationMenu>

            </HeaderMenu>

        </>

     );
}
 
export default Menu;