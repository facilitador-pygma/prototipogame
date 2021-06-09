/**************************************/
/*********** Importaciones ************/
/**************************************/
//Instaladas
import styled, { css } from 'styled-components';

//Propias
import { NavLink } from "react-router-dom";

const HeaderMenu = styled.header`
    position: relative;
    width: 100%;
    padding: 30px 100px; /*arriba y abajo | derecha e izquierda*/

    /*centrar los elementos hijos del header*/
    display: flex;
    align-items: center;/*centra verticalmente*/
    justify-content: center;
    flex-wrap: wrap;
    z-index: 10000;
`;

const NavigationMenu = styled.ul` /*Setting a la lista no ordenada (ul) que contiene la lista de items*/
    width: calc(100% - 60px);
    display: flex;
    justify-content:space-between;
    align-items: center;
`;

const ListaMenu = styled.li` /*Settings a los items de la li*/
    list-style: none;

    width: 100%;
    height: 50px; /*Se anexa altura a cada li para ajustar el contenido*/
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px; /*Entre cada item deja un margin*/
`;

const MarcoMenu = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: #350048;

    box-shadow: 0 15px 25px rgba(0,0,0,0.03);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;

    cursor: pointer;

    &::before{ /**/
        position: absolute;
        top: -4px;
        left: 50%; /*Corre la capa un 50% a la derecha*/
        transform: translateX(-50%); /*Ayuda a centrar la capa*/
        content: '';
        height: 3px;
        width: 8vw;

        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        background: #350048;
    }

    &::after{ /**/
        position: absolute;
        bottom: -4px;
        left: 50%; /*Corre la capa un 50% a la derecha*/
        transform: translateX(-50%); /*Ayuda a centrar la capa*/
        content: '';
        height: 2px;
        width: 3.2vw;

        border-top: 1px solid #350048; /*Si no se pone queda visualizando una linea blanca del borde de .marco */
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;

        background: #350048;    
    }
`;

const BarraMenu = styled.div`
    width: 7.2vw;
    height: 1.5px;
    position: absolute;
    top: -0.75px;
    left: 50%;
    transform: translateX(-50%);
    
    background: linear-gradient(#ffa500,#ffff00);

    border-radius: 10px;
`;

const ContenedorCirculosMenu = styled.div`
    width: 3vw;
    height: 1vh;

    position: absolute;
    bottom: -2px;
    left: 50%; /*Corre la capa un 50% a la derecha*/
    transform: translateX(-50%); /*Ayuda a centrar la capa*/

    display: flex;
    align-items: center;
    justify-content: space-around;

    z-index: 2; /*Para que no se esconda detras del espacio MarcoMenu*/
`;

const CirculosMenu = styled.span`
    position: relative;
    border-radius: 50%;
    background: linear-gradient(#ffa500,#ffff00);
    
    &:nth-child(1){
        width: 2px;
        height: 2px;
    }

    &:nth-child(2){
        width: 4px;
        height: 4px;
    }

    &:nth-child(3){
        width: 2px;
        height: 2px;
    }

`;

const ContenidoMarcoMenu = styled.div`
    width: 90%;
    height: 80%;
    background: darkorange;
    border-radius: 5px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Navlink = styled.a`/* styled(NavLink) , era un elemento a */
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5em;
    padding: 1px; /*Crea un padding para poder hacer un hover background al enlace*/
    border-radius: 20px;
`;


export { HeaderMenu,
         NavigationMenu,
         ListaMenu,
         MarcoMenu,
         BarraMenu,
         ContenedorCirculosMenu,
         CirculosMenu,
         ContenidoMarcoMenu,
         Navlink };