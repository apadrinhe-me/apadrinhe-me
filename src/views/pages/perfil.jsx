import "./perfil.css";
import React from "react";
import logo from "../../media/logo/logo.svg"
import Menu from "../../componets/layout/Menu";

const perfil = () => {
    return (
        <>

            <Menu />
            <main className="perfil">
                <div className="perfilContainer">

                    <div className="perfilHeader">
                        <div className="perfilCapa">
                            <img src="https://www.proa.org.br/wp-content/uploads/2021/09/Captura-de-Tela-2021-09-27-as-16.08.50.png"></img>
                        </div>

                        <div className="perfilNomeInteracao structureCenter">

                            <div className="perfilFoto">
                                <img src={logo} alt="" />
                            </div>

                            <h2>UserName(name)</h2>

                            <div className="buttonsChatConecApad">
                                <button className="buttonChat"><img src="" alt="" />chat</button>

                                <div className="buttonsConecApad">
                                    <button className="buttonConectar">Conectar</button>
                                    <button className="buttonApadrinhar">Apadrinhar</button>
                                </div>
                            </div>

                        </div>

                        <div className="perfilPubMomMap structureCenter">
                            <ul>
                                <li>Publicações</li>
                                <li>Moments</li>
                                <li>Mapa de carreira</li>
                                <li className="perfilConfig">...<img src="" alt="" /></li>
                            </ul>

                        </div>


                    </div>
                </div>


            </main>

        </>
    );
}

export default perfil;