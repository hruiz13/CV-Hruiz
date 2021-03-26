import React from 'react'

export const Mod9 = () => {
    return (
        <div className="root">
            <div className="overlay">
                <h1>Countries</h1>
                <p>React App de countries</p>
                <img src="./imagenes/coun1.PNG" className="imagenModal" alt="calendario" />
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
                        Redux
                    </li>
                    <li>
                        react-router-dom
                    </li>
                    <li>
                        NodeJS
                    </li>
                    <li>
                        PostgreSQL
                    </li>

                </ul>
                <p>Funcionamiento:
                <br />Pagina para guardar actividades en una lista de paises. Utiliza una api externa de counrties, y una db para almacenar las actividades internas.
                <br />
                </p>
                <p>La App esta actualmente en uso en: <a href="https://ft-10-pi-countries-hruiz13.vercel.app/" >haciendo clic AQUI</a> </p>


                <p></p>


            </div>
        </div>
    )
}
