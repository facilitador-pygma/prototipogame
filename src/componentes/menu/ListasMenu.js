/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';


//Elementos
import { ListaMenu,
         MarcoMenu,
         BarraMenu,
         ContenedorCirculosMenu,
         CirculosMenu,
         ContenidoMarcoMenu,
         Navlink } from '../../elementos/StyledMenu';

const ListasMenu = ( { tituloenlace } ) => {

    return ( 

        <>
            <ListaMenu> {/*Elemento li */}

                <MarcoMenu> {/*Elemento div */}

                    <BarraMenu></BarraMenu> {/*Elemento div */}

                    <ContenidoMarcoMenu>
                        
                        <Navlink href="#">{tituloenlace}</Navlink> {/*Tener cuidado mas adelante a cambia por NavLink y href="" por to="" */}

                    </ContenidoMarcoMenu>
                    
                    <ContenedorCirculosMenu> {/*Elemento div */}
                    
                        <CirculosMenu></CirculosMenu>
                        <CirculosMenu></CirculosMenu> {/*Elementos span */}
                        <CirculosMenu></CirculosMenu>

                    </ContenedorCirculosMenu>
                    
                </MarcoMenu>      
                            
            </ListaMenu>
        </>

     );
}
 
export default ListasMenu;