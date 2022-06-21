import React from "react";
import "./Msg.css";

const Msg = props => {
    return(
        <div className={"Msg " + props.pov}>
            <div>
                <span className="text">{props.children}</span> {props.pov === "remetente" ? <span><i className="bi bi-check-circle-fill"></i></span> : ""} <span className="hour">{props.hour}</span>
            </div>
        </div>
    );
}

export default Msg;