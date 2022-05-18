import "./Post.css";
import React from "react";
import ProfPicture from "../profPicture/ProfPicture";
import getPostDate from "../../funcional/getPostDate";

const Post = props => {
    //formatar horáario do post

    return (
        <div className="Post">
            <div className="post-header">
                <div className="header-prof-picture">
                    <ProfPicture src={props.profPicture} scale="80px"/>
                </div>
                <div className="header-prof-info">
                    <span className="fullname">{props.fullname}</span>
                    <span className="aspiration">{props.aspiration}</span>
                    <span className="postDate">{getPostDate(props.postDate)}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;