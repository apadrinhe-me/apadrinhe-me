import "./Comment.css";
import React, { useState } from "react";
import ProfPicture from "../profPicture/ProfPicture";
import LikeIco from "../../../media/icons/item_like_icon_fill.svg";
import ReplyIco from "../../../media/icons/item_reply_icon_fill.svg";
import getPostDate from "../../funcional/getPostDate";

const Comment = props => {
    return(
        <div className="Comment">
            <ProfPicture src="natan_proa.jpg" scale={70} />
            <div className="comment-info">
                <span className="text-primary">Usuário</span>
                <span className="text-secondary">Comentário de id {props.id}</span>
                <div className="comment-buttons">
                    {/*<span className="comment-date">5 dias atrás</span>*/}
                    <button className="btn-like"><img src={LikeIco} alt="Botão de curtir comentário"/> 10</button>
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