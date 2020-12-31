import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


export const EducacionScreen = () => {
    return (
        <div className="col">
                <div className="icono">
                    <FontAwesomeIcon icon={faGraduationCap} size="3x" color="grey" />
                </div>
                <div className="pages">
                    <div className="titulo">
                        <h2>Educacion</h2>
                    </div>
                    <div className="item">
                    <h3>Piloto Comercial</h3>
                    <p>Piloto de Aviacion Comercial en la Academia Antioqueña de Aviacion.
                    </p>
                        <span>Medellin - Colombia</span>
                    </div>
                    <div className="item">
                    <h3>Ingles</h3>
                    <p>Curso de ingles en Universal Lenguage Academy.</p>
                    <span>Medellin - Colombia</span>
                    </div>
                    <div className="item">
                    <h3>Ingles</h3>
                    <p>Curso de ingles en EF.</p>
                    <span>Seattle, WA - USA</span>
                    </div>
                    <div className="item item-final">
                        <h3>UDEMY</h3>
                        <p>Cursos de Udemy</p>
                        <span>WEB</span>
                        <ul>
                            <li>
                                Introduccion a Laravel (Victor Robles) 
                            </li>
                            <li>
                                Crea sistemas Ecommerce con PHP7 (Juan Fernando Urrego)
                            </li>
                            <li>
                                Crea sistemas POS inventarios y ventas con PHP7 y adminLTE (Juan fernando Urego)  
                            </li>
                            <li>
                                Node de cero a experto (Fernando Herrera) 
                            </li>
                            <li>
                                React: De cero a experto / hooks y MERN (Fernando Herrera)
                            </li>
                        </ul>
                    </div>
                </div>
                
        </div>
    )
}
