import React from "react";
import "./RecomendarPopup.css";

const RecomendarPopup = props => {
    return(
        <div className="RecomendarPopup">
            <button className="btn-format btn-close" onClick={props.handleCloseRecomendacao}><i className="bi bi-x-lg"></i></button>
            Recomendação kk
        </div>
    );
}

export default RecomendarPopup;