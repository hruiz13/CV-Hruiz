import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faEnvelope, faHome, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'


export const LateralBarScreen = () => {
    return (
        <div id="lat">
            <div className="head">
                <img src="./imagenes/hruiz.jpg" className="imagen" alt="hruiz profile" />
                <div className="nombre">
                    <h2>Hector A. Ruiz H.</h2>
                </div>
            </div>
            <div className="col">
                <div className="icono">
                    <FontAwesomeIcon icon={faUser} size="lg" color="white" />
                </div>
                <div className="info">
                Soy una persona autodidacta, recursiva por lo que suelo buscar como realizar diferentes actividades, proyectos, apoyandome en algun equipo de trabajo, o amigos con conocimientos. 
                <br/>Soy puntual, visionario y emprendedor.
                </div>
            </div>
            <div className="col">
                <div className="icono">
                    <FontAwesomeIcon icon={faPhone} size="lg" color="white" />
                </div>
                <div className="info">
                    <h4>(+57)-300 610 8719</h4>
                    <span>celular</span>

                </div>
            </div>
            <div className="col">
                <div className="icono">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" color="white" />
                </div>
                <div className="info">
                    <h4>hruiz.com@gmail.com</h4>
                    <span>personal</span>

                </div>
            </div>
            <div className="col">
                <div className="icono">
                    <FontAwesomeIcon icon={faHome} size="lg" color="white" />
                </div>
                <div className="info">
                    <h4>Antioquia - Colombia</h4>

                </div>
            </div>
            <div className="col">
                <div className="icono">
                    <FontAwesomeIcon icon={faCalendarPlus} size="lg" color="white" />
                </div>
                <div className="conocimientos">
                    <h4>Conocimientos</h4>
                    <ul>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            PHP
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            Laravel
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Reux
                        </li>
                    </ul>

                </div>
            </div>
            
        </div>
    )
}
