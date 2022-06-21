import React from "react";
import "./ApoioApadrinhar.css";

const ApoioApadrinhar = props => {
    return(
        <>
            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>

            <div className="ApoioApadrinhar border">
                <h1>Apadrinhar</h1>
            </div>
        </>
    );
}

export default ApoioApadrinhar;