/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';

//Componentes
import LogoG4T from './../logog4t/LogoG4T';
import Menu from './../menu/Menu';
import Footer from './../footer/Footer';

//Imagenes
import logoEmpresa from './../../assets/img/Logo_LoginyRegistro.png';
import cajaSeleccionAvatar from './../../assets/img/Caja_Selección avatar.png';
import retoDesbloqueado from './../../assets/img/Retos_Mapa1.png'
import retoBloqueado from './../../assets/img/Retos_Mapa_bloqueado.png';

//Elementos
import { BoxLogoG4T,
         BoxLogoEmpresa,
         ImgLogoEmpresa } from './../../elementos/StyledHome';

import { BoxMarcoSeleccionAvatar,
         ImgMarcoSeleccionAvatar } from './../../elementos/StyledEscenaAvatar';

import { BoxMarcoRetos,
         TituloEscenaRetos,
         BoxTodosRetos,
         BoxReto,
         BoxImgReto,
         BoxImgEscenaReto,
         ImgsEscenaReto,
         LeyendaEscenaReto } from './../../elementos/StyledEscenaRetos';


    const EscenaReto = () => {

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
    
                    <BoxMarcoSeleccionAvatar>
                        <ImgMarcoSeleccionAvatar src = {cajaSeleccionAvatar}/>

                        <BoxMarcoRetos>

                            <TituloEscenaRetos>selecciona el reto </TituloEscenaRetos>

                            <BoxTodosRetos>
                                <BoxReto>
                                    <BoxImgEscenaReto>
                                        <ImgsEscenaReto src= { retoDesbloqueado }/>
                                    </BoxImgEscenaReto>
                                    <LeyendaEscenaReto>Reto 1</LeyendaEscenaReto>
                                </BoxReto>

                                <BoxReto>
                                    <BoxImgEscenaReto>
                                        <ImgsEscenaReto src= { retoBloqueado }/>
                                    </BoxImgEscenaReto>
                                    <LeyendaEscenaReto>Reto 2</LeyendaEscenaReto>
                                </BoxReto>

                                <BoxReto>
                                    <BoxImgEscenaReto>
                                        <ImgsEscenaReto src= { retoBloqueado }/>
                                    </BoxImgEscenaReto>
                                    <LeyendaEscenaReto>Reto 3</LeyendaEscenaReto>
                                </BoxReto>

                                <BoxReto>
                                    <BoxImgEscenaReto>
                                        <ImgsEscenaReto src= { retoBloqueado }/>
                                    </BoxImgEscenaReto>
                                    <LeyendaEscenaReto>Reto 4</LeyendaEscenaReto>
                                </BoxReto>

                                <BoxReto>
                                    <BoxImgEscenaReto>
                                        <ImgsEscenaReto src= { retoBloqueado }/>
                                    </BoxImgEscenaReto>
                                    <LeyendaEscenaReto>Reto 5</LeyendaEscenaReto>
                                </BoxReto>

                                <BoxReto>
                                    <BoxImgEscenaReto>
                                        <ImgsEscenaReto src= { retoBloqueado }/>
                                    </BoxImgEscenaReto>
                                    <LeyendaEscenaReto>Reto 6</LeyendaEscenaReto>
                                </BoxReto>

                                <BoxReto>
                                    <BoxImgEscenaReto>
                                        <ImgsEscenaReto src= { retoBloqueado }/>
                                    </BoxImgEscenaReto>
                                    <LeyendaEscenaReto>Reto 7</LeyendaEscenaReto>
                                </BoxReto>

                                <BoxReto>
                                    <BoxImgEscenaReto>
                                        <ImgsEscenaReto src= { retoBloqueado }/>
                                    </BoxImgEscenaReto>
                                    <LeyendaEscenaReto>Reto 8</LeyendaEscenaReto>
                                </BoxReto>
                                
                            </BoxTodosRetos>
                        </BoxMarcoRetos>
                    </BoxMarcoSeleccionAvatar>
                    
                </section>
            </>
        );
    }  
        
    export default EscenaReto;