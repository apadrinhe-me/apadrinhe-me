import "./ButtonTwoFill.css";
import React from "react";

const ButtonOneFill = props => {
    return (
        <button type="button" className="ButtonTwoFill" onClick={props.onclick}>{props.children}</button>
    );
}

export default ButtonOneFill;