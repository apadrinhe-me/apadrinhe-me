import "./NavPerfil.css";
import React, { useState } from "react";
import foto from "../../../media/profile_pictures/natan_proa.jpg";
import ProfPicture from "../profPicture/ProfPicture";
import ChatBtn from "../../../media/icons/item_chat_icon_fill.svg";
import ConectionBtn from "../../../media/icons/item_conections_icon_fill.svg";
import { Link } from "react-router-dom";
import Cover from "./Valentina_Profile/cover_space.png"
import ButtonApoiar from "../buttonApoiar/ButtonApoiar";
import ApadPopup from "../apadPopup/ApadPopup";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { borderRadius } from "@mui/system";
import valentinapic from "../../../media/profile_pictures/valentina.png"
import valentinaprofile from "../../layout/navPerfil/Valentina_Profile/cover_space.png"
import Button from "@mui/material/Button"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#242526',
    border: 'none',
    boxShadow: 24,
    borderRadius: 5,
    listStyle: 'none',
    p: 4,
    height: "70vh",
    overflowY: "auto",
};

const NavPerfil = props => {
    const [openEditProf, setOpenEditProf] = useState(false);
    const handleOpen = () => setOpenEditProf(true);
    const handleClose = () => setOpenEditProf(false);

    let url = window.location.href
    url = url.split("/")

    let profileTab = url[4] || 'publicacoes';

    const [buttonPopup, setButtonPopup] = useState(false);

    if (buttonPopup) {
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        document.querySelector('body').style.overflowY = 'auto';
    }

    return (
        <>
            <div className="NavPerfil">
                <div className="perfilContainer">
                    <img className="bg_blur_perfil" src={Cover}></img>
                    <div className="perfilHeader">
                        <div className="header-content">
                            <div className="perfilCapa">
                                <img src={Cover}></img>
                            </div>

                            <div className="perfilNomeInteracao ">

                                <div className="perfilFoto">
                                    <ProfPicture src="valentina.png" scale={"100%"} />
                                </div>

                                <div className="userName">
                                    <h2>Valentina</h2>
                                    <button className="btn-editar-perfil" onClick={handleOpen}>
                                        <i className="bi bi-pencil-square"></i>
                                        Editar perfil
                                    </button>
                                </div>

                                <div className="buttonsChatConecApad">
                                    <div className="buttonsChat-box">
                                        <Link to="/chat"><button className="buttonChat"><img src={ChatBtn} alt="" /></button></Link>
                                    </div>

                                    <div className="buttonsConecApad">
                                        <button className="buttonConectar"><img src={ConectionBtn} alt="ícone de apadrinhar" /> Conectar</button>
                                        {
                                            props.profType === "jovem" ?
                                                <ButtonApoiar setButtonPopup={setButtonPopup} />
                                                :
                                                ""
                                        }
                                    </div>
                                </div>

                            </div>

                            <nav className="perfilPubMomMapCfa">
                                <ul className="perfilPubMomMapCfa">
                                    {
                                        props.profType === "jovem" ?
                                            <>
                                                <li><Link to="/perfil/publicacoes"><button>Publicações</button></Link> {profileTab === "publicacoes" ? <div className="active"></div> : ""}</li>
                                                <li><Link to="/perfil/moments"><button>Moments</button></Link> {profileTab === "moments" ? <div className="active"></div> : ""}</li>
                                                <li><Link to="/perfil/mapacarreira"><button>Mapa de carreira</button></Link> {profileTab === "mapacarreira" ? <div className="active"></div> : ""}</li>
                                                <li><Link to="/perfil/cursosrecomendados"><button>Cursos recomendados</button></Link> {profileTab === "cursosrecomendados" ? <div className="active"></div> : ""}</li>
                                                <li><Link to="/perfil/cursosfavoritos"><button>Cursos favoritos</button></Link> {profileTab === "cursosfavoritos" ? <div className="active"></div> : ""}</li>
                                            </>
                                            :
                                            <>
                                                <li><Link to="/perfil/publicacoes"><button>Publicações</button></Link>{profileTab === "publicacoes" ? <div className="active"></div> : ""}</li>
                                                <li><Link to="/perfil/historico"><button>Histórico de ajudas</button></Link>{profileTab === "historico" ? <div className="active"></div> : ""}</li>
                                                <li><Link to="/perfil/apadrinhamentos"><button>Jovens Apadrinhados</button></Link>{profileTab === "apadrinhamentos" ? <div className="active"></div> : ""}</li>
                                            </>
                                    }

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <ApadPopup
                trigger={buttonPopup}
                setTrigger={setButtonPopup} />

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openEditProf}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openEditProf}>
                    <Box className="my-scrollbar" sx={style}>
                        <div className="editprofile">
                            <div className="box1_editprofile">
                                <p>Editar perfil</p>
                                <button className="exit" onClick={handleClose}>x</button>
                            </div>
                            <div className="editPic">
                                <p>Foto de perfil</p>
                                <input id="novafoto" type="file" />
                                <label className="mudarfoto" htmlFor="novafoto">Mudar foto</label></div>
                            <div className="d-flex justify-center"><img className="valentinapic" src={valentinapic} height="120px" width="120px" /></div>
                            <div className="editcapa">
                                <p>Foto da capa</p>
                                <input id="novacapa" type="file" />
                                <label className="mudarfoto" htmlFor="novacapa">Mudar capa</label>
                            </div>
                            <div className="d-flex justify-center"><img className="valentinaprofile" src={valentinaprofile} height="120px" /></div>
                            <div className="editbiografia">
                                <p>Biografia</p>
                            </div>
                            <div className="d-flex justify-center"><textarea className="textarea" placeholder="Digite aqui..."></textarea></div>
                            <div className="alterarnome">
                                <p>Alterar Nome</p>
                                <div className="inputsnames">
                                    <input className="inputname" type="text" placeholder="Nome" />
                                    <input className="inputname" type="text" placeholder="Sobrenome" required /></div>
                            </div>
                            <div className="alterarusername">
                                <p>Alterar UserName</p>
                                <input className="changeusername" type="text" placeholder="Novo UserName" />
                            </div>
                            <div className="alteraraspiracao">
                                <p>Alterar aspiração</p>
                                <input className="changeaspiracao" type="text" placeholder="Aspirante a..." />
                            </div>
                            <div className="d-flex justify-center">
                                <Button className="salvar" onClick={handleClose} >Salvar</Button>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default NavPerfil