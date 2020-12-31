import React, { useState } from 'react'
import { LateralBarScreen } from '../ui/LateralBarScreen'
import { NavBarScreen } from '../ui/NavBarScreen'
import Modal from 'react-modal';
import { Mod1 } from './modals/Mod1';
import { Mod2 } from './modals/Mod2';
import { Mod3 } from './modals/Mod3';
import { Mod4 } from './modals/Mod4';
 
const customStyles = {
content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


export const ProyectosScreen = () => {

    const [view, setView] = useState(false)
    const [modalAbierta, setModalAbierta] = useState(1)

    const handleClick = (e) =>{
        setModalAbierta(e.target.name)
        setView(true)
    }

    const closeModal=()=>{
        setView(false)
    }


    return (
        <div className="contenedor">
            <LateralBarScreen />
            <div id="mainC">
                <div className="seccion">
                    <NavBarScreen />
                </div>
                <div>
                    <div className="proyectos">
                        
                        <div className="item-imagen">
                            <img src="./imagenes/estudio.PNG" className="laImagen" alt="estudio aerocivil" name="1" onClick={handleClick}/> 
                            <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Estudio Aviacion
                                <br/><br/><span>Pagina web de estudio para los examenes de la aerocivil.</span>
                            </div>
                            </div>
                        </div>
                        
                        <div className="item-imagen">
                            <img src="./imagenes/aaa1.PNG" className="laImagen animate__animated" alt="peso balance avion" name="2" onClick={handleClick}/> 
                            <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Peso y balance
                                <br/><br/><span>Pagina web para realizar peso y balance de un avion.</span>
                            </div>
                            </div>
                        </div>
                   
                        <div className="item-imagen">
                            <img src="./imagenes/ata1.PNG" className="laImagen animate__animated" alt="aerolinea virtual" name="3" onClick={handleClick}/> 
                            <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Aerolinea Virtual
                                <br/><br/><span>Pagina web de una aerolinea virtual.</span>
                            </div>
                            </div>
                        </div>
                        <div className="item-imagen">
                            <img src="./imagenes/al1.PNG" className="laImagen animate__animated" alt="administracion empresa" name="4" onClick={handleClick}/> 
                            <div className="sobre">
                            <div className="texto-interno animate__animated">
                                Administracion produccion
                                <br/><br/><span>Pagina web de administracion para empresa.</span>
                            </div>
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
                //className="modal"
                // overlayClassName="modal-fondo"
                > 
                    {(modalAbierta==="1")&&<Mod1/>}
                    {(modalAbierta==="2")&&<Mod2/>}
                    {(modalAbierta==="3")&&<Mod3/>}
                    {(modalAbierta==="4")&&<Mod4/>}
                
                </Modal>
        </div>
    )
}
