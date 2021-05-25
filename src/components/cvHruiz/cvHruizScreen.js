import React from 'react'
import { LateralBarScreen } from '../ui/LateralBarScreen'
import { NavBarScreen } from '../ui/NavBarScreen'
import { EducacionScreen } from './EducacionScreen'
import { TrabajoScreen } from './TrabajoScreen'

export const cvHruizScreen = () => {
    return (
        <div className="contenedor">
            <LateralBarScreen />
            <div id="mainC">
                <div className="seccion">
                    <NavBarScreen />
                </div>
                <div>
                    <div className="seccion animate__animated animate__fadeIn">
                        <EducacionScreen />
                    </div>
                    <div className="seccion">
                        <TrabajoScreen />
                    </div>
                </div>


            </div>
        </div>
    )
}
