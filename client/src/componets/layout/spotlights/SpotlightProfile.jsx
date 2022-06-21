import "./SpotlightProfile.css";
import React from "react";
import ProfPicture from "../profPicture/ProfPicture";
import { Link } from "react-router-dom";

const SpotlightProfile = props => {
    return(
        <Link to="/perfil" className="SpotlightProfile">
            <ProfPicture scale="50px" src={props.pic}/>
            <div className="profile-info">
                <span className="name">{props.name}</span>
                <span className="description">{props.description}</span>
            </div>
        </Link>
    );
}

export default SpotlightProfile;