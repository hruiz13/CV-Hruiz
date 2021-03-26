import React from 'react'

export const Mod10 = () => {
    return (
        <div className="root">
            <div className="overlay">
                <h1>Juego Batalla Naval</h1>
                <p>React App de juego famoso de barcos</p>
                <img src="./imagenes/bn1.PNG" className="imagenModal" alt="calendario" />
                <p>Tecnologia utilizada:</p>
                <ul>
                    <li>
                        html
                    </li>
                    <li>
                        SASS
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        react-router-dom
                    </li>
                    <li>
                        NodeJS
                    </li>
                    <li>
                        Socket-io
                    </li>

                </ul>
                <p>Funcionamiento:
                <br />Juego conocido en algunos lugares como Batalla Naval, es para 2 jugadores online, comunicacion en tiempo real con Sockets-io.
                <br />
                </p>
                <p>La App esta actualmente en uso en: <a href="http://bn.hruiz.com" >haciendo clic AQUI</a> </p>


                <p></p>


            </div>
        </div>
    )
}
