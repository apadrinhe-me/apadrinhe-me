import "./cardSolicitacaoConexoes.css";

import React from "react";

const CardSolicitacaoConexoes = props => {
    return (
        <div className="cardUsuarioInteracao ">
            <button className="buttonUsuarioInteracao azul">Aceitar</button>
            <button className="buttonUsuarioInteracao vermelho">Recusar</button>
        </div>
    );
}

export default CardSolicitacaoConexoes;