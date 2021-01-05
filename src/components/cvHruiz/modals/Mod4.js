import React from 'react'

export const Mod4 = () => {
    return (
        <div className="root">
        <div className="overlay">
            <h1>Administracion de produccion y empresa</h1>
            <p>Pagina web realizada para administrar el proceso de produccion de la empresa, asi como su contabilidad.</p>
            <img src="./imagenes/al1.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <img src="./imagenes/al2.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <img src="./imagenes/al3.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <p>Tecnologia utilizada:</p>
                <ul>
                    <li>
                        html
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Javascript
                    </li>
                    <li>
                        JQuery
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        PHP (Modelo Vista Controlador)
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Node
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        Sockets-io
                    </li>
                </ul>
            <p>Funcionamiento: 
                <br/>Usuario Admin, puede ver, crear, editar, eliminar ordenes de produccion; Generar y editar facturas, ver contabilidad, graficos contables, manejo de diario; Administrar maquinas, tiempos, repuestos.
                <br/>Usuario Produccion, puede ver, cambiar estados de ordenes de produccion.
                <br/>Usuario secretaria, puede ver, elimnar ordenes de produccion; Generar, ver, modificar facturas, chequear transferencias.
                <br/>
                <br/>El sistema creado con php de manera Modelo, Vista, Controlador, sistema de autenticacion con contraseñas encriptadas, CSS para estilos, plantillas, javascript para la modificacion y manejo de dom, segun llegaban los datos por sockets-io manejados por node.
                <br/>Todo esto se manejaba de un servidor ecxlusivo de la empresa que tambien lo monte y configure con sistema Linux, con LAMP, node, MySQL. 
                <br/>El servidor tambien le monte un sistema RAID para el manejo de todos los archivos de la empresa.
            </p>
            <p>Ejemplo en video del sistema:</p>
            <iframe width="560" height="315" title="arteLaser" src="https://www.youtube.com/embed/QToqOxNv2Mw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p></p>

            
        </div>
        </div>
    )
}
