import "./MomentsPosts.css";
import React from "react";
import MomentsPost from "../../momentsPost/MomentsPost";

const MomentsPosts = props => {
    return(
        <div className="MomentsPosts my-scrollbar">
            <MomentsPost id={1}/>
            <MomentsPost id={2}/>
            <MomentsPost id={3}/>
        </div>
    );
}

export default MomentsPosts;