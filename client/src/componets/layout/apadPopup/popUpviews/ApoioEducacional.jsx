import React from "react";
import "./ApoioEducacional.css";

const ApoioEducacional = props => {
    return(
        <>
            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>

            <div className="ApoioApadrinhar border">
                <h1>Educacional</h1>
            </div>
        </>
    );
}

export default ApoioEducacional;