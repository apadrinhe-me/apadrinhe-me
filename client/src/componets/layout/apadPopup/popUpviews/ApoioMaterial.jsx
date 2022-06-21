import React from "react";
import "./ApoioMaterial.css";

const ApoioMaterial = props => {
    return(
        <>
            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>
            <div className="ApoioMaterial border">
                <h1>Apoio Material</h1>
            </div>
        </>
    );
}

export default ApoioMaterial;