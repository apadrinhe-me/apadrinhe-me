import "./NavPerfil.css";
import React, {useState} from "react";
import foto from "../../../media/profile_pictures/natan_proa.jpg";
import ProfPicture from "../profPicture/ProfPicture";
import ChatBtn from "../../../media/icons/item_chat_icon_fill.svg";
import ConectionBtn from "../../../media/icons/item_conections_icon_fill.svg";
import { Link } from "react-router-dom";
import Cover from "./Valentina_Profile/cover_space.png"
import ButtonApoiar from "../buttonApoiar/ButtonApoiar";
import ApadPopup from "../apadPopup/ApadPopup";

const NavPerfil = props => {
    let url = window.location.href
    url = url.split("/")

    let profileTab = url[4] || 'publicacoes';

    const[buttonPopup, setButtonPopup] = useState(false);

    if (buttonPopup){
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
                                    <ProfPicture src="natan_proa.jpg" scale={"100%"} />
                                </div>

                                <div className="userName">
                                    <h2>Valentina</h2>
                                    <button className="btn-editar-perfil">
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
            setTrigger={setButtonPopup}/>
        </>
    );
}

export default NavPerfil