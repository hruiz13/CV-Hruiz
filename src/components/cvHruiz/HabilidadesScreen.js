import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'


export const HabilidadesScreen = () => {
    return (
        <div className="col">
                <div className="icono">
                    <FontAwesomeIcon icon={faPencilRuler} size="3x" color="grey" />
                </div>
                <div className="pages">
                    <div className="titulo">
                        <h2>Habilidades y conocimientos</h2>
                    </div>
                    <div className="item">
                    <h3>Maquinas Laser</h3>
                    <p>Tengo conocimiento de manejo de maquinas laser, alineacion, mantenimiento, electronica de las mismas.
                    </p>
                    </div>
                    <div className="item">
                    <h3>Maquinas CNC</h3>
                    <p>Cuento con el conocimiento de programacion en Codigo G de maquinas CNC, manejo de la maquina, mantenimiento de la maquina.</p>
                    </div>
                    <div className="item">
                    <h3>Arduino</h3>
                    <p>He realizado proyectos de electronica basados en Arduino. Incuyendo la programacion de las placas.</p>
                    </div>
                    <div className="item item-final">
                        <h3>Manejo de programas</h3>
                        <p>Programas que he utilizado.</p>
                        <ul>
                            <li>
                                Corel Draw
                            </li>
                            <li>
                                Adobe Illustrator
                            </li>
                            <li>
                                Adobe Premiere
                            </li>
                            <li>
                                Adobe Photoshop
                            </li>
                            <li>
                                Adobe Lightroom
                            </li>
                            <li>
                                Autocad (basico)
                            </li>
                            <li>
                                Fusion 360 (Basico)
                            </li>
                            <li>
                                ArtCam
                            </li>
                        </ul>
                    </div>
                </div>
                
        </div>
    )
}
