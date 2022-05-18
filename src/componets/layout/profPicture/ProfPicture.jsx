import "./ProfPicture.css";
import React from "react";

const ProfPicture = props => {
    return (
        <>
            <img src={require("../../../media/profile_pictures/" + props.src)} alt="Imgem de perfil" style={{width: props.scale, height: props.scale}} className="ProfPicture"/>
        </>
    );
}

export default ProfPicture;