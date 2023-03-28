import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'


export const TrabajoScreen = () => {
    return (
        <div className="col">
            <div className="icono">
                <FontAwesomeIcon icon={faSuitcase} size="3x" color="grey" />
            </div>
            <div className="pages">
                <div className="titulo">
                    <h2>Experiencia de trabajo</h2>
                </div>
                <div className="item">
                    <h3>Alfred</h3>
                    <span>Feb 2022 - Presente</span>
                    <p>Senior Frontend developer
                        <br />Creacion de feautres para el sitio web
                        <br />Creacion de la app mobile para la compañia.
                        <br />Optimización de codigo existente y actualización de tecnologia. 
                    </p>
                </div>
                <div className="item">
                    <h3>It Globers</h3>
                    <span>Jun 2021 - Feb 2022</span>
                    <p>Front end developer - Techleader
                        <br />Manejo de ecommerce con VTEX-IO
                        <br />Lider de proyecto para ecommerce de gran empresa en colombia (cencosud/Jumbo).
                        <br />Desarrollo, Manejo de repositorio.
                    </p>
                </div>
                <div className="item">
                    <h3>Arte Laser Corte & grabado</h3>
                    <span>2010 - 2020</span>
                    <p>Gerente - propietario.
                        <br />Administracion general de la empresa.
                        <br />Manejo, programacion y mantenimiento de maquinas CNC (router y laser).
                        <br />Diseño y mantenimiento del sistema web de gestion, produccion y facturacion.
                    </p>
                </div>
                <div className="item item-final">
                    <h3>Freelancer</h3>
                    <p>Web page developer</p>
                    <span>WEB - Mas info en seccion Proyectos</span>
                    <ul>
                        <li>
                            Sistema de estudio para examen Aerocivil colombia (2007)
                        </li>
                        <li>
                            Aerotaxi de Antioquia Virtual (2008)
                        </li>
                        <li>
                            IVAO Colombia (2009)
                        </li>
                        <li>
                            Academia Antioqueña de Aviacion - Sistema peso y balance de avion. (2011)
                        </li>
                        <li>
                            hruiz.com - Pagina web personal (2007 - 2020)
                        </li>
                        <li>
                            Arte Laser corte y grabado - Pagina web (2010 - 2020)
                        </li>
                        <li>
                            Arte Laser corte y grabado - Sistema de gestion (2012 - 2020)
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
