import React from "react";
import ProfPicture from "../../profPicture/ProfPicture";
import "./Contato_info.css";

const Contato_info = props => {
    return(
        <div className="Contato_info">
            <div className="info-picture">
                <ProfPicture src={props.profPic} scale={65} />
            </div>

            <div className="info-profile">
                <strong>{props.nome}</strong>
                <span className={props.status === "online" ? "status online" : "status offline"}>{props.status}</span>
            </div>

            <div className="info-options">
                <button><i className="bi bi-three-dots"></i></button>
            </div>
        </div>
    );
}

export default Contato_info;