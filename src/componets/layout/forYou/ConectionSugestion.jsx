import "./ConectionSugestion.css";
import React from "react";
import ProfPicture from "../profPicture/ProfPicture";
import Verified from "../../../media/icons/item_brain_icon_fill.svg";
import {Link} from "react-router-dom";

const ConectionSugestion = props => {
    return(
        <Link to="/perfil" className="ConectionSugestion">
            <div className="profile-picture ">
                <ProfPicture scale={55} src={props.profPic} />
            </div>
            <div className="profile-info">
                <span className="profile-username">{props.username} </span>
                <span className="profile-name">{props.name}</span>
            </div>
        </Link>
    );
}

export default ConectionSugestion;