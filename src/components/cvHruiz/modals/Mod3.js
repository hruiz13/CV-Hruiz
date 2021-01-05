import React from 'react'

export const Mod3 = () => {
    return (
        <div className="root">
        <div className="overlay">
            <h1>Aerolinea Virtual</h1>
            <p>Pagina web realizada para administrar una aerolinea virtual regional.</p>
            <img src="./imagenes/ata1.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <img src="./imagenes/ata2.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <img src="./imagenes/ata3.PNG" className="imagenModal" alt="estudio aerocivil"/>
            <p>Tecnologia utilizada:</p>
                <ul>
                    <li>
                        html
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        PHP
                    </li>
                    <li>
                        MySQL
                    </li>
                </ul>
            <p>Funcionamiento: 
                <br/>Registro y Login guardados en base de datos MySQL
                <br/>Leer y mostrar pilotos activos con su rango y horas de vuelo registradas.
                <br/>Mostrar vuelos realizados, tiempo de vuelo y pasajeros registrados generales.
                <br/>Ver que vuelos puede realizar el piloto segun las horas de vuelo que tiene.
                <br/>Ver contratos (generados por el sistema) de vuelos para realizar.
                <br/>Registrar vuelos que el piloto puede realizar, segun aviones que tiene posibilidad de volar.
                <br/>El STAFF tiene un sisema para corroborar vuelos realizados, ver y administrar usuarios, noticias, aeronaves.
            </p>
            <p>Ejemplo en video del sistema:</p>
            <iframe width="560" height="315" title="ATA" src="https://www.youtube.com/embed/I_KP_PFIsgA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p></p>

            
        </div>
        </div>
    )
}
