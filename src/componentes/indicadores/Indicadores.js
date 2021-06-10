/**************************************/
/*********** Importaciones ************/
/**************************************/

//Propios de React
import React from 'react';


//Elementos
import { MarcoIndicadores,
         BoxLineasSupIndicadores,
         GuionesIndicadores,
         BoxLineasInfIndicadores,
         BoxContenidoMarcoIndicadores,
         BoxTextoIcono,
         TituloIndicador,
         BoxBarraAvanceIndicador,
         BarraAvanceIndicador,
         PorcentajeAvanceIndicador } from './../../elementos/StyledIndicadores';

const Indicadores = ( {textoIndicador} ) => {

    return( 
    
        <>
            <MarcoIndicadores> 

                <BoxLineasSupIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                </BoxLineasSupIndicadores>

                <BoxLineasInfIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                    <GuionesIndicadores></GuionesIndicadores>
                </BoxLineasInfIndicadores>

                <BoxContenidoMarcoIndicadores>

                    <BoxTextoIcono>
                        <TituloIndicador>{textoIndicador}</TituloIndicador>
                    </BoxTextoIcono>

                    <BoxBarraAvanceIndicador>
                        <BarraAvanceIndicador>
                            <PorcentajeAvanceIndicador>50%</PorcentajeAvanceIndicador>
                        </BarraAvanceIndicador>
                    </BoxBarraAvanceIndicador>

                </BoxContenidoMarcoIndicadores>

            </MarcoIndicadores>
            
        </>
    );
}

export default Indicadores;