import React from 'react'

export const Mod11 = () => {
    return (
        <div className="root">
            <div className="overlay">
                <h1>Countries / React Native</h1>
                <p>React Native App de countries</p>
                <img src="./imagenes/counat.PNG" className="imagenModal" alt="calendario" />
                <p>Tecnologia utilizada:</p>
                <ul>
                    <li>
                        html
                    </li>
                    <li>
                        React Native
                    </li>
                    <li>
                        NodeJS
                    </li>
                    <li>
                        PostgreSQL
                    </li>

                </ul>
                <p>Funcionamiento:
                <br />Adaptacion para React Native de Country app, para guardar actividades en una lista de paises. Utiliza una api externa de counrties, y una db para almacenar las actividades internas.
                <br />
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wBQ7p7hVGH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <p></p>


            </div>
        </div>
    )
}
