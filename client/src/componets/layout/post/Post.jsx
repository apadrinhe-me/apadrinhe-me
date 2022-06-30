import "./Post.css";
import React, { useState } from "react";
import ProfPicture from "../profPicture/ProfPicture";
import getPostDate from "../../funcional/getPostDate";
import ButtonApoiar from "../buttonApoiar/ButtonApoiar";
import book from "../../../media/icons/item_cursos_icon_stroke.svg"
import { Link } from "react-router-dom";

//import dos ícones
import likeIcoFill from "../../../media/icons/item_like_icon_fill.svg";
import likeIcoStroke from "../../../media/icons/item_like_icon_stroke.svg";
import commentIcoFill from "../../../media/icons/item_comment_icon_fill.svg";
import commentIcoStroke from "../../../media/icons/item_comment_icon_stroke.svg";
import shareIco from "../../../media/icons/item_share_icon_stroke.svg";
import rocketIco from "../../../media/icons/icons_apadrinhar_icon_fill.svg";
import ApadPopup from "../apadPopup/ApadPopup";
import ButtonTwoFill from "../buttons/ButtonTwoFill";

const Post = props => {

    const [buttonPopup, setButtonPopup] = useState(false);

    if (buttonPopup) {
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        document.querySelector('body').style.overflowY = 'auto';
    }

    return (
        <>
            <div className="Post">
                <div className="post-header">
                    <div className="header-prof-picture">
                        <ProfPicture src={props.profPicture} scale={50} />
                    </div>
                    <div className="header-prof-info">
                        <span className="fullname">{props.fullname}</span>
                        <span className="aspiration">{props.aspiration}</span>
                        <span className="postDate">{getPostDate(props.postDate)}</span>
                    </div>
                </div>
                <div className="post-description">
                    {props.postDescription}
                </div>
                <div className="post-media">
                    <img src={require(`../../../media/post_media/${props.postMedia}`)} alt="Imagem do post" className="post-img" />
                </div>
                <div className="post-engagement">
                    <span className="likes">{props.qntLikes} likes</span>
                    <div className="commentsShares">
                        <span className="comments">{props.qntComments} comentários</span>
                        <span className="shared">{props.qntShares} compartilhamentos</span>
                    </div>

                </div>
                <hr></hr>
                <div className="post-actionBtns">
                    <div className="reactions">
                        <button className="btn btn-like"> <img src={likeIcoStroke} alt="icone de like" className="btn-ico" /></button>
                        <button className="btn btn-comment"><img src={commentIcoStroke} alt="icone de like" className="btn-ico" /></button>
                        <button className="btn btn-share"><img src={shareIco} alt="icone de like" className="btn-ico" /></button>
                    </div>
                    <div className="recomendar_redirect">
                        <Link to="/cursos"><ButtonTwoFill>Recomendar</ButtonTwoFill>{/**<button className="recomendacao"><img src={book} height={16} />Recomendar</button>*/}</Link>
                    </div>
                    <ButtonApoiar setButtonPopup={setButtonPopup} />

                </div>
            </div>

            <ApadPopup
                trigger={buttonPopup}
                setTrigger={setButtonPopup} />
        </>
    );
}

export default Post;