import "./NavPerfil.css";
import React from "react";
import foto from "../../../media/profile_pictures/natan_proa.jpg";
import ProfPicture from "../profPicture/ProfPicture";
import ApadrinharBtn from "../../../media/icons/icons_apadrinhar_icon_fill.svg";
import ChatBtn from "../../../media/icons/item_chat_icon_fill.svg";
import ConectionBtn from "../../../media/icons/item_conections_icon_fill.svg";
import {Link} from "react-router-dom";

const NavPerfil = props => {
    let url = window.location.href
    url = url.split("/")

    let profileTab = url[4] || 'publicacoes';

    return (
        <div className="NavPerfil">
            <div className="perfilContainer">

                <div className="perfilHeader">
                    <div className="header-content">
                        <div className="perfilCapa">
                            <img src="https://www.proa.org.br/wp-content/uploads/2021/09/Captura-de-Tela-2021-09-27-as-16.08.50.png"></img>
                        </div>

                        <div className="perfilNomeInteracao ">

                            <div className="perfilFoto">
                                <ProfPicture src="natan_proa.jpg" scale={"100%"} />
                            </div>

                            <div className="userName">
                                <h2>UserName(name)</h2>
                                <button className="btn-editar-perfil">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path
                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                    Editar perfil
                                </button>
                            </div>

                            <div className="buttonsChatConecApad">
                                <div className="buttonsChat-box">
                                    <button className="buttonChat"><img src={ChatBtn} alt=""/></button>
                                </div>

                                <div className="buttonsConecApad">
                                    <button className="buttonConectar"><img src={ConectionBtn} alt="ícone de apadrinhar"/> Conectar</button>
                                    {
                                        props.profType === "jovem" ?
                                            <button className="buttonApadrinhar" onClick={() => props.setButtonPopup(true)}><img src={ApadrinharBtn} alt="ícone de "/> Apadrinhar</button>
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
                                            <li><Link to="/perfil/nivelpadrinho"><button>Seu nível</button></Link>{profileTab === "nivelpadrinho" ? <div className="active"></div> : ""}</li>
                                            <li><Link to="/perfil/publicacoes"><button>Publicações</button></Link>{profileTab === "publicacoes" ? <div className="active"></div> : ""}</li>
                                            <li><Link to="/perfil/recomendacoes"><button>Cursos recomendados</button></Link>{profileTab === "recomendacoes" ? <div className="active"></div> : ""}</li>
                                            <li><Link to="/perfil/apadrinhamentos"><button>Jovens Apadrinhados</button></Link>{profileTab === "apadrinhamentos" ? <div className="active"></div> : ""}</li>
                                        </>
                                }

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavPerfil