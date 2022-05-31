import "./cardTodasConexoes.css";
import Usuario from "../../../media/icons/item_people_icon_stroke.svg"
import React from "react";

const CardTodasConexoes = props => {
    return (

        <div className="cardUsuarioInteracao ">
            <div className="avatarUsuario"><img src={Usuario} alt="" /></div>
            <div className="backgroundBlack">
                <h2>Name</h2>
                <span>
                    <button className="buttonUsuarioInteracao">Ver Perfil</button>
                    <i class="bi bi-check-lg CardUsusarioInteracaoIcons"></i>
                </span>
            </div>
        </div>
    );
}

export default CardTodasConexoes;