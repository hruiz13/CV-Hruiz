import React from 'react'
import { LateralBarScreen } from '../ui/LateralBarScreen'
import { NavBarScreen } from '../ui/NavBarScreen'
import { HabilidadesScreen } from './HabilidadesScreen'
import { HobbiesScreen } from './HobbiesScreen'

export const ConocimientosScreen = () => {
    return (
        <div className="contenedor">
            <LateralBarScreen />
            <div id="mainC">
                <div className="seccion">
                    <NavBarScreen />
                </div>
                <div className="seccion  animate__animated animate__fadeIn">
                    <HabilidadesScreen />
                </div>
                <div className="seccion">
                    <HobbiesScreen />
                </div>


            </div>
        </div>
    )
}
