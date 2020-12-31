import React from 'react'

export const Mod1 = () => {
    return (
        <div className="root">
        <div className="overlay">
            <h1>Pagina para estudio</h1>
            <p>Pagina web realizada para estudiar para el examen de piloto que se presenta en la aerocivil de colombia.</p>
            <img src="./imagenes/estudio.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <p>Tecnologia utilizada:</p>
                <ul>
                    <li>
                        html
                    </li>
                    <li>
                        css
                    </li>
                    <li>
                        PHP (5.4)
                    </li>
                    <li>
                        MySQL
                    </li>
                </ul>
            <p>Funcionamiento: Un usuario hacia loggin (session), esta se comprobaba con los datos guardados en MySQL.
                <br/>Una vez autenticado podia ver las preguntas segun el paquete (piloto, auxiliar).
                <br/>Seleccionaban un tema a estudiar y este mostraba todas las preguntas, tocaba responder por seleccion multiple.
                <br/>Si la pregunta era correcta, la daba como correcta, si no, mostraba la respuesta correcta.
                <br/>El sistema mostraba cuantas preguntas fueron correctas y cuantas incorrectas.
                <br/>El contador se podia resetear.
            </p>
            <p>Ejemplo en video del sistema:</p>
            <p></p>
            
        </div>
        </div>
    )
}
