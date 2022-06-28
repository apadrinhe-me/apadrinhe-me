import "./ForYou.css";
import React from "react";
import ConectionSugestion from "./ConectionSugestion";
import HotTopic from "./HotTopic";

const ForYou = props => {
    return (
        <div className="ForYou">
            <h2 className="page-title">Moments</h2>
            <span className="page-subtitle">Sugestão de conexões</span>
            <div className="conection-sugestions">
                <ConectionSugestion
                    profPic="cris.jpg"
                    username="@cris_ferreira"
                    name="Cristian Ferreira"
                />

                <ConectionSugestion
                    profPic="natan_proa.jpg"
                    username="@nate_rock"
                    name="Natan Barbosa"
                />

                <ConectionSugestion
                    profPic="aurora.png"
                    username="@auroraseles"
                    name="Aurora Seles"
                />

                <ConectionSugestion
                    profPic="valentina.png"
                    username="@valentina"
                    name="Valentina"
                />

                <ConectionSugestion
                    profPic="wagner.png"
                    username="@wag_pereira"
                    name="Wagner Pereira"
                />

                <ConectionSugestion
                    profPic="lg.png"
                    username="@guu.reiss"
                    name="Luis Gustavo"
                />
            </div>

            <span className="page-subtitle">Em alta 🔥🔥🔥 </span>
            <div className="HotTopics">
                <HotTopic topic="#Apadrinhe-me" />
                <HotTopic topic="#Astronomia" />
                <HotTopic topic="#Doemateriais" />
                <HotTopic topic="#Tecnologia" />
                <HotTopic topic="#Demoday" />
                <HotTopic topic="#Estude" />
            </div>

            <hr />

            <div className="copyright-div">
                <div className="links">
                    <span>Seja parceiro</span>
                    <span>Termos</span>
                    <span>Sobre Nós</span>
                </div>

                <div className="copyright">
                    <span>Apadrinhe-me &copy; 2022 </span>
                </div>
            </div>
        </div>
    );
}

export default ForYou;