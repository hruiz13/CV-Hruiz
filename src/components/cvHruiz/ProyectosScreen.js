import React, { useState } from 'react'
import { LateralBarScreen } from '../ui/LateralBarScreen'
import { NavBarScreen } from '../ui/NavBarScreen'
import Modal from 'react-modal';
import { Mod1 } from './modals/Mod1';
import { Mod2 } from './modals/Mod2';
import { Mod3 } from './modals/Mod3';
import { Mod4 } from './modals/Mod4';
import { Mod5 } from './modals/Mod5';
import { Mod6 } from './modals/Mod6';
import { Mod7 } from './modals/Mod7';
import { Mod8 } from './modals/Mod8';
import { Mod9 } from './modals/Mod9';
import { Mod10 } from './modals/Mod10';
import { Mod11 } from './modals/Mod11';
import { Mod12 } from './modals/Mod12';

const customStyles = {
    content: {
        //top: '50%',
        //left: '50%',
        //right: 'auto',
        //bottom: 'auto',
        //marginRight: '-50%',
        //transform: 'translate(-50%, -50%)',
        margin: 'auto',
        width: '60vw',
        height: '80vh'
    }
};

Modal.setAppElement('#root')


export const ProyectosScreen = () => {

    const [view, setView] = useState(false)
    const [modalAbierta, setModalAbierta] = useState(1)

    const handleClick = (e) => {
        setModalAbierta(e.target.name)
        setView(true)
    }

    const closeModal = () => {
        setView(false)
    }


    return (
        <div className="contenedor">
            <LateralBarScreen />
            <div id="mainC">
                <div className="seccion">
                    <NavBarScreen />
                </div>
                <div className="proyectos  animate__animated animate__fadeIn">
                    <div className="item-imagen">
                        <img src="./imagenes/estudio.PNG" className="laImagen" alt="estudio aerocivil" name="1" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Estudio Aviacion
                                <br /><br /><span>Pagina web de estudio para los examenes de la aerocivil.</span>
                                <br />html, css, php, mysql
                                </div>
                        </div>
                    </div>

                    <div className="item-imagen">
                        <img src="./imagenes/aaa1.PNG" className="laImagen animate__animated" alt="peso balance avion" name="2" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Peso y balance
                                <br /><br /><span>Pagina web para realizar peso y balance de un avion.</span>
                                <br />html, css, php, mysql
                                </div>
                        </div>
                    </div>

                    <div className="item-imagen">
                        <img src="./imagenes/ata1.PNG" className="laImagen animate__animated" alt="aerolinea virtual" name="3" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Aerolinea Virtual
                                <br /><br /><span>Pagina web de una aerolinea virtual.</span>
                                <br />html, css, php, mysql
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/al1.PNG" className="laImagen animate__animated" alt="administracion empresa" name="4" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Administracion produccion
                                <br /><br /><span>Pagina web de administracion para empresa.</span>
                                <br />PHP, MySQL, Javascript, Sockets-io, Nodejs, express
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/hruiz1.PNG" className="laImagen animate__animated" alt="hruiz com e-commerce" name="5" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                E-commerce
                                <br /><br /><span>Tienda virtual de productos.</span>
                                <br />Laravel, MySQL, Javascript, Mercadopago, Paypal
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/wapp1.PNG" className="laImagen animate__animated" alt="weather app" name="6" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Weather App
                                <br /><br /><span>Aplicacion del tiempo.</span>
                                <br />React, Redux, router-dom
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/calendario.PNG" className="laImagen animate__animated" alt="weather app" name="7" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Calendar App
                                <br /><br /><span>Calendario</span>
                                <br />React, Redux, router-dom, Nodejs, MySQL
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/gif1.PNG" className="laImagen animate__animated" alt="weather app" name="8" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Gif App
                                <br /><br /><span>Aplicacion de gifs</span>
                                <br />React
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/coun1.PNG" className="laImagen animate__animated" alt="weather app" name="9" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                country App
                                <br /><br /><span>Aplicacion de actividades en paises</span>
                                <br />React, Redux, Nodejs, PostgreSQL
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/bn1.PNG" className="laImagen animate__animated" alt="weather app" name="10" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Batalla Naval App
                                <br /><br /><span>Juego en linea para 2</span>
                                <br />React, Nodejs
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/counat2.PNG" className="laImagen animate__animated" alt="weather app" name="11" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Country App React Native
                                <br /><br /><span>Aplicacion de actividades en paises</span>
                                <br />React Native, Nodejs
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/hot1.PNG" className="laImagen animate__animated" alt="weather app" name="12" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Hotel Managment app
                                <br /><br /><span>App para administrar un hotel</span>
                                <br />React, Redux, html, less, ant design, typescript, Nodejs, supabase
                                </div>
                        </div>
                    </div>
                    <div className="item-imagen">
                        <img src="./imagenes/jumbo.png" className="laImagen animate__animated" alt="Jumbo" name="12" onClick={handleClick} />
                        <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Jumbo Colombia - VTEX-IO
                                <br /><br /><span>Reconstruccion de la pagina totalmente con tecnologia VTEX-IO</span>
                                <br />VTEX-IO, React, Redux, html, typescript, GraphQL
                                </div>
                        </div>
                    </div>
                </div>

            </div>
            <Modal
                isOpen={view}
                //   onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                overlayClassName="modal-fondo"
            >
                {(modalAbierta === "1") && <Mod1 />}
                {(modalAbierta === "2") && <Mod2 />}
                {(modalAbierta === "3") && <Mod3 />}
                {(modalAbierta === "4") && <Mod4 />}
                {(modalAbierta === "5") && <Mod5 />}
                {(modalAbierta === "6") && <Mod6 />}
                {(modalAbierta === "7") && <Mod7 />}
                {(modalAbierta === "8") && <Mod8 />}
                {(modalAbierta === "9") && <Mod9 />}
                {(modalAbierta === "10") && <Mod10 />}
                {(modalAbierta === "11") && <Mod11 />}
                {(modalAbierta === "12") && <Mod12 />}

            </Modal>
        </div>
    )
}
