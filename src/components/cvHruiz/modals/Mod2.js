import React from 'react'

export const Mod2 = () => {
    return (
        <div className="root">
        <div className="overlay">
            <h1>Pagina para peso y balance</h1>
            <p>Pagina web realizada para realizar el peso y balance de varios aviones de una escuela de aviacion.</p>
            <img src="./imagenes/aaa1.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <img src="./imagenes/aaa2.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <img src="./imagenes/aaa3.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <p>Tecnologia utilizada:</p>
                <ul>
                    <li>
                        html
                    </li>
                    <li>
                        Photoshop
                    </li>
                    <li>
                        PHP
                    </li>
                    <li>
                        MySQL
                    </li>
                </ul>
            <p>Funcionamiento: 
                <br/>Un usuario seleccionaba el avion en el que se volaria.
                <br/>Se llenan los datos solicitados, pesos, combustible, destino.
                <br/>El sistema buscaba en la base de datos los destinos posibles segun el origen seleccionado.
                <br/>El sistema llenava las tablas de frecuencias de comunicaciones, pesos y realizaba el balance del avion mostrandolo en una imagen.
                <br/>El sistema decia si era apto o no para volar con el peso y balance que arrojaba.
                <br/>Se generaba un archivo para imprimir y entregar en despacho de vuelo.
            </p>
            <p>Ejemplo en video del sistema:</p>
            <iframe width="560" height="315" title="AAAPesoyBalance" src="https://www.youtube.com/embed/FLapgdf9iCM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p></p>

            
        </div>
        </div>
    )
}
