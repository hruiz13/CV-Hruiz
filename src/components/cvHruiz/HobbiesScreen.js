import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFighterJet } from '@fortawesome/free-solid-svg-icons'


export const HobbiesScreen = () => {
    return (
        <div className="col">
                <div className="icono">
                    <FontAwesomeIcon icon={faFighterJet} size="3x" color="grey" />
                </div>
                <div className="pages">
                    <div className="titulo">
                        <h2>Hobbies</h2>
                    </div>
                    <div className="item">
                    <h3>Aeromodelismo</h3>
                    <p>He realizado aeromodelos a control remoto.
                    </p>
                    </div>
                    <div className="item">
                    <h3>Fotografia y edicion de video</h3>
                    <p>Me gusta la fotografia digital, y la edicion de video. He realizado cursos de esto.</p>
                    </div>
                    <div className="item item-final">
                    <h3>Carpinteria Digital</h3>
                    <p>He realizado proyectos de carpinteria con tecnologia de maquinaria CNC.</p>
                    </div>
                   
                </div>
                
        </div>
    )
}
