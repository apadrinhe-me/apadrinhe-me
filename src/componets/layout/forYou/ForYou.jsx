import "./ForYou.css";
import React from "react";
import ConectionSugestion from "./ConectionSugestion";
import HotTopic from "./HotTopic";

const ForYou = props => {
    return(
        <div className="ForYou">
            <h2 className="page-title">Moments</h2>
            <span className="page-subtitle">Sugestão de conexões</span>
            <div className="conection-sugestions">
                <ConectionSugestion
                    profPic="natan_proa.jpg"
                    username="@nate_rock"
                    name="Natan Barbosa"
                />

                <ConectionSugestion
                    profPic="natan_proa.jpg"
                    username="@nate_rock"
                    name="Natan Barbosa"
                />

                <ConectionSugestion
                    profPic="natan_proa.jpg"
                    username="@nate_rock"
                    name="Natan Barbosa"
                />

                <ConectionSugestion
                    profPic="natan_proa.jpg"
                    username="@nate_rock"
                    name="Natan Barbosa"
                />

                <ConectionSugestion
                    profPic="natan_proa.jpg"
                    username="@nate_rock"
                    name="Natan Barbosa"
                />

                <ConectionSugestion
                    profPic="natan_proa.jpg"
                    username="@nate_rock"
                    name="Natan Barbosa"
                />
            </div>

            <span className="page-subtitle">Em alta "foguinho" </span>
            <div className="HotTopics">
                <HotTopic topic="#Tecnologia" />
                <HotTopic topic="#Tecnologia" />
                <HotTopic topic="#Tecnologia" />
                <HotTopic topic="#Tecnologia" />
                <HotTopic topic="#Tecnologia" />
                <HotTopic topic="#Tecnologia" />
            </div>

            <hr/>

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