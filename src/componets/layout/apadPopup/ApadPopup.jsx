import "./ApadPupup.css";
import React from "react";
import ApadrinheCard from "./ApadrinheCard";
import OthersCard from "./OthersCard";

const ApadPopup = props => {
    //Animação de fechar o popup
    function closePopup(){
        document.querySelector(".popup-inner").classList.add('slideout');
        document.querySelector(".ApadPopup").classList.add('slideout');

        setTimeout(() => props.setTrigger(false), 450);
    }

    return(props.trigger) ? (
        <div className="ApadPopup">
            <div className="popup-inner">
                <button className="close-btn" onClick={ () => closePopup() }>X</button>
                <h2>Apadrinhar</h2>
                <div className="apad-types">
                    <div className="apadrinhe">
                        <ApadrinheCard/>
                    </div>

                    <div className="other-types">
                        <OthersCard
                            background="#44308c"
                            border="#3800FF"
                            btnHover="#362670"
                            icon="item_star_icon_fill.svg"
                            title="Recomendação"
                            description="Recomendar cursos gratuitos. Procure no catálogo acadêmico um curso e recomende. Há diversos cursos incríveis."
                            btnText="Recomendar"
                        />

                        <OthersCard
                            background="#8c6530"
                            border="#FF9000"
                            btnHover="#362670"
                            icon="item_star_icon_fill.svg"
                            title="Doação rápida"
                            description="Contribuição rápida e prática. Nessa modalidade você escolhe um valor predefinido para apoiar. Máx: R$ 100,00"
                            btnText="Doar agora"
                        />

                        <OthersCard
                            background="#40ac61"
                            border="#00902C"
                            btnHover="#362670"
                            icon="item_star_icon_fill.svg"
                            title="Doação de bens"
                            description="Contribua com os bens úteis para ajudar no quesito acadêmico. Seus bens podem fazer o bem. Veja o que você pode doar."
                            btnText="Doar agora"
                        />
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default ApadPopup;