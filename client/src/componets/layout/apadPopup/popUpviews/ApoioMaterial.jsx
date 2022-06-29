import React from "react";
import "./ApoioMaterial.css";
import LogoDoacao from "../../../../media/icons/IconsApoios/fast_donate.svg"

const ApoioMaterial = props => {
    return (
        <>
            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>
           <h2>material</h2>
           <div>
            <img src={LogoDoacao} alt="" />
           </div>
        </>
    );
}

export default ApoioMaterial;