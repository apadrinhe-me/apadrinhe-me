import "./HotTopic.css";
import React from "react";
import {Link} from "react-router-dom";

const HotTopic = props => {
    return(
        <div className="HotTopic">
            {props.topic}
        </div>
    );
}

export default HotTopic;