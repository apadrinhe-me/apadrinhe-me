import "./NavPerfil.css";
import React from "react";
import foto from "../../../media/profile_pictures/natan_proa.jpg";
import ProfPicture from "../profPicture/ProfPicture";

const NavPerfil = props => {
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
                            </div>

                            <div className="buttonsChatConecApad">
                                <div className="buttonsChat-box">
                                    <button className="buttonChat">chat</button>
                                </div>

                                <div className="buttonsConecApad">
                                    <button className="buttonConectar">Conectar</button>
                                    <button className="buttonApadrinhar">Apadrinhar</button>
                                </div>
                            </div>

                        </div>

                        <div className="perfilPubMomMapCfa">
                            <ul className="perfilPubMomMapCfa">
                                <li><button>Publicações</button></li>
                                <li><button>Moments</button></li>
                                <li><button>Mapa de carreira</button></li>
                                <li><button>cursos favoritos</button></li>
                                <li className="perfilConfig">...<img src="" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavPerfil