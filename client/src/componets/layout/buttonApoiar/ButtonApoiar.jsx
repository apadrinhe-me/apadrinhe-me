import "./ButtonApoiar.css";
import React from "react";
import icon from "../../../media/icons/icons_apadrinhar_icon_fill.svg"

const ButtonApoiar = props => {
    return(
        <button type="button" className="ButtonApoiar" onClick={() => props.setButtonPopup(true)}><img src={icon} alt="foguete"/> Apoiar</button>
    );
}

export default ButtonApoiar;