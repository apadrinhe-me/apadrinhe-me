import "./ButtonOneFill.css";
import React from "react";

const ButtonOneFill = props => {
    return (
        <button type="button" className="ButtonOneFill" onClick={props.onclick}>{props.children}</button>
    );
}

export default ButtonOneFill;