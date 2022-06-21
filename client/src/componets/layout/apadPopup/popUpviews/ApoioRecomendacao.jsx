import React from "react";
import "./ApoioRecomendacao.css";

const ApoioRecomendacao = props => {
    return(
        <>
            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>

            <div className="ApoioRecomendacao border">
                <h1>Apoio Recomendação de curso</h1>
            </div>
        </>
    );
}

export default ApoioRecomendacao;