import "./OthersCard.css";
import React, {useEffect} from "react";

const OthersCard = props => {
    //Estilos variáveis

    const OthersCard = {
        border: '1px solid ' + props.border
    }

    const cardImage = {
        background: props.background
    }

    const button = {
        background: props.background
    }

    return(
        <div className="OthersCard" style={OthersCard}>
            <div className="card-image" style={cardImage}>
                <img src={props.logo} alt="ícone do card"/>
            </div>

            <div className="card-info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

            <div className="card-btn">
                <button style={button} onClick={() => props.setSelectedApoio(props.tipoApoio)}>{props.btnText}</button>
            </div>
        </div>
    );
}

export default OthersCard;