import React from "react";
import ProfPicture from "../../profPicture/ProfPicture";
import "./Contato.css"

const Contato = props => {
    return(
        <div className="Contato">
            <div className="contato-picture">
                <ProfPicture src={props.prof_picture} scale={60}/>
            </div>
            <div className="contato-info">
                <strong>{props.nome_contato}</strong>
                <span>{props.ultima_msg}</span>
            </div>
            <div className="contato-last-msg">
                <span>{props.tempo}</span>
            </div>
        </div>
    );
}

export default Contato;