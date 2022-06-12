import React from "react";
import ProfPicture from "../../profPicture/ProfPicture";
import "./Contato_info.css";

const Contato_info = props => {
    return(
        <div className="Contato_info">
            <div className="info-picture">
                <ProfPicture src="valentina.png" scale={65} />
            </div>

            <div className="info-profile">
                <strong>Wagner R. Pereira</strong>
                <span className="status">online</span>
            </div>

            <div className="info-options">
                <button><i className="bi bi-three-dots"></i></button>
            </div>
        </div>
    );
}