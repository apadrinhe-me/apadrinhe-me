import "./cardSolicitacaoConexoes.css";

import React from "react";

const CardSolicitacaoConexoes = props => {
    return (
        <div className="cardUsuarioInteracao ">
            <button className="buttonUsuarioInteracaoSolicitacao azul">Aceitar</button>
            <button className="buttonUsuarioInteracaoSolicitacao vermelho">Recusar</button>
        </div>
    );
}

export default CardSolicitacaoConexoes;