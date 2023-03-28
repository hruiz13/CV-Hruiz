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
                    Como autodidacta y emprendedor, he logrado realizar con éxito una variedad de proyectos complejos, desde la planificación hasta la implementación. Soy capaz de encontrar soluciones creativas a los desafíos y de trabajar eficazmente en equipo, utilizando mis habilidades de comunicación y liderazgo. Además, mi compromiso con la puntualidad y mi visión estratégica me permiten siempre cumplir con los plazos y alcanzar resultados sobresalientes.
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
                            SASS
                        </li>
                        <li>
                            LESS
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Typescript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            GraphQL
                        </li>
                        <li>
                            Redux
                        </li>
                        <li>
                            Nodejs
                        </li>
                        <li>
                            PHP
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            PostgreSQL
                        </li>
                        <li>
                            Laravel
                        </li>
                        <li>
                            Sockets-io
                        </li>
                        <li>
                            Tachyons
                        </li>
                        <li>
                            VTEX-IO
                        </li>
                        <li>
                            Flutter
                        </li>
                        <li>
                            React Native
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
