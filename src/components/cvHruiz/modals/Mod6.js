import React from 'react'

export const Mod6 = () => {
    return (
        <div className="root">
            <div className="overlay">
                <h1>Weather App</h1>
                <p>React App para buscar el clima de una ciudad</p>
                <img src="./imagenes/wapp1.PNG" className="imagenModal" alt="pag hruiz" />
                <img src="./imagenes/wapp2.PNG" className="imagenModal" alt="ventas hruiz" />
                <p>Tecnologia utilizada:</p>
                <ul>
                    <li>
                        html
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Redux
                    </li>
                    <li>
                        react-router-dom
                    </li>
                </ul>
                <p>Funcionamiento:
                <br />Ingreso de ciudad
                <br />Se puede ver en detalle cada ciudad
                <br />Opcion de cambiar de C a F
                <br />
                </p>
                <p>La App esta actualmente en uso en: <a href="https://hruiz13.github.io/weather-app/" >haciendo clic AQUI</a> </p>

                <p></p>


            </div>
        </div>
    )
}
