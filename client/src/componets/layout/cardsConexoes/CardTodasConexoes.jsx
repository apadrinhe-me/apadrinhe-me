import "./cardTodasConexoes.css";

import React from "react";

const CardTodasConexoes = props => {
    return (
        <div className="cardUsuarioInteracao ">
            <div className="buttonsCardUsuarioInteracao" >
                <button className="buttonUsuarioInteracao">Ver Perfil</button>
                <button className="CardUsusarioInteracaoIcons"><i className="bi bi-check-lg "></i></button>
            </div>
        </div>
    );
}

export default CardTodasConexoes;