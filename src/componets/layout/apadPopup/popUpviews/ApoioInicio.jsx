import React from "react";
import "./ApoioInicio.css";
import ApadrinheCard from "../ApadrinheCard";
import OthersCard from "../OthersCard";
import LogoRecomendacao from "../../../../media/icons/IconsApoios/recomendation.svg"
import LogoDoacao from "../../../../media/icons/IconsApoios/fast_donate.svg"
import LogoMaterial from "../../../../media/icons/IconsApoios/sponsoring.svg"

const ApoioInicio = props => {
    return(
        <div className="ApoioInicio border">
            <div className="apad-types">
                <div className="apadrinhe">
                    <ApadrinheCard
                        setSelectedApoio={props.setSelectedApoio}
                        tipoApoio={1}
                    />
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
                        setSelectedApoio={props.setSelectedApoio}
                        tipoApoio={2}
                        logo={LogoRecomendacao}
                    />

                    <OthersCard
                        background="#8c6530"
                        border="#FF9000"
                        btnHover="#362670"
                        icon="item_star_icon_fill.svg"
                        title="Doação rápida"
                        description="Contribuição rápida e prática. Nessa modalidade você escolhe um valor predefinido para apoiar. Máx: R$ 100,00"
                        btnText="Doar agora"
                        setSelectedApoio={props.setSelectedApoio}
                        tipoApoio={3}
                        logo={LogoDoacao}
                    />

                    <OthersCard
                        background="#40ac61"
                        border="#00902C"
                        btnHover="#362670"
                        icon="item_star_icon_fill.svg"
                        title="Doação de bens"
                        description="Contribua com os bens úteis para ajudar no quesito acadêmico. Seus bens podem fazer o bem. Veja o que você pode doar."
                        btnText="Doar agora"
                        setSelectedApoio={props.setSelectedApoio}
                        tipoApoio={4}
                        logo={LogoMaterial}
                    />
                </div>
            </div>
        </div>
    );
}

export default ApoioInicio;