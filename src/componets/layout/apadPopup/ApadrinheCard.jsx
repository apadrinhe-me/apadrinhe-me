import "./ApadrinheCard.css";
import React from "react";
import CardBackground from "../../../media/Imagens_pop-up/img_space.svg"
import CardMoon from "../../../media/Imagens_pop-up/img_moon.svg"
import CardPlanet1 from "../../../media/Imagens_pop-up/img_planet1.svg"
import CardPlanet2 from "../../../media/Imagens_pop-up/img_planet2.svg"
import CardRocket from "../../../media/Imagens_pop-up/img_rocketsmoke.svg"

const ApadrinheCard = props => {
    return(
        <div className="ApadrinheCard">
            <div className="card-image">
                <img src={CardBackground} alt="Espaço cideral" className="CardBackground"/>
                <img src={CardMoon} alt="Espaço cideral" className="CardMoon"/>
                <img src={CardPlanet1} alt="Espaço cideral" className="CardPlanet1"/>
                <img src={CardPlanet2} alt="Espaço cideral" className="CardPlanet2"/>
                <img src={CardRocket} alt="Espaço cideral" className="CardRocket"/>
            </div>

            <div className="card-info">
                <h3>Apadrinhe</h3>
                <p>Ofereça oportunidades e acompanhe o desenvolvimento de perto. Crie um laço afetivo com um aspirante e prestigie seu sucesso</p>
            </div>

            <div className="card-btn">
                <button onClick={() => props.setSelectedApoio(props.tipoApoio)}>Apadrinhar</button>
            </div>
        </div>
    );
}

export default ApadrinheCard;