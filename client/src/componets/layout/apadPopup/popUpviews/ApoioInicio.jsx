import React from "react";
import "./ApoioInicio.css";

import OthersCard from "../OthersCard";
import LogoRecomendacao from "../../../../media/icons/IconsApoios/recomendation.svg"
import LogoDoacao from "../../../../media/icons/IconsApoios/fast_donate.svg"
import LogoMaterial from "../../../../media/icons/IconsApoios/sponsoring.svg"
import LogoEducacional from "../../../../media/icons/IconsApoios/educacional.svg"

const ApoioInicio = props => {
    return (
        <div className="ApoioInicio ">
            <div className="apad-types">


                <div className="other-types">

                    <OthersCard
                        background="#B6157C"
                        setSelectedApoio={props.setSelectedApoio}
                        border="#B6157C"
                        btnHover="#362670"
                        icon="item_star_icon_fill.svg"
                        title="Educacional"
                        description="Ofereça oportunidades e acompanhe o desenvolvimento de perto. Crieum laço afetivo com um aspirante, e prestigie seu sucesso."
                        btnText="Recomendar"
                        tipoApoio={1}
                        logo={LogoEducacional}
                    />


                    <OthersCard
                        background="#FF9000"
                        border="#FF9000"
                        btnHover="s"
                        icon="item_star_icon_fill.svg"
                        title="Financeiro"
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
                        title="Material"
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