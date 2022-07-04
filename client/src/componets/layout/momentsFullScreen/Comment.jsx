import "./Comment.css";
import React, { useState } from "react";
import ProfPicture from "../profPicture/ProfPicture";
import LikeIco from "../../../media/icons/item_like_icon_fill.svg";
import ReplyIco from "../../../media/icons/item_reply_icon_fill.svg";
import getPostDate from "../../funcional/getPostDate";

const Comment = props => {
    return(
        <div className="Comment">
            <ProfPicture src={props.profile} scale={50} />
            <div className="comment-info">
                <span className="text-primary">{props.usuario}</span>
                <span className="text-secondary"> {props.comentario} </span>
                <div className="comment-buttons">
                    {/*<span className="comment-date">5 dias atrás</span>*/}
                    <button className="btn-like"><img src={LikeIco}  alt="Botão de curtir comentário"/> {props.like}</button>
                    <button className="btn-reply"><img src={ReplyIco} alt="Botão de responder"/>Responder</button>
                </div>
            </div>
            <div className="more-options">
                <button className="btn-options">...</button>
            </div>
        </div>
    );
}

export default Comment;