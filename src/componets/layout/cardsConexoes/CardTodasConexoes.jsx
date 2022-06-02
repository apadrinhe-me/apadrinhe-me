import "./cardTodasConexoes.css";

import React from "react";

const CardTodasConexoes = props => {
    return (
        <div className="cardUsuarioInteracao ">
            <div>
                <button className="buttonUsuarioInteracao">Ver Perfil</button>
                <i className="bi bi-check-lg CardUsusarioInteracaoIcons"></i>
            </div>
        </div>
    );
}

export default CardTodasConexoes;