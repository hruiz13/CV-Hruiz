import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const NavBarScreen = () => {
    return (
        <ul>
            <li><Link to="/" >Inicio</Link></li>
            <li><Link to="/conocimientos" > Conocimientos</Link></li>
            <li><Link to="/proyectos" > Proyectos</Link></li>
            <li>Contacto</li>
        </ul>
    )
}
