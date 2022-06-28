import React, {useState} from "react";
import "./PopupContent.css";

const PopupContent = props => {
    return(
        <div className="PopupContent">
            {props.postType}
        </div>
    );
}

export default PopupContent;