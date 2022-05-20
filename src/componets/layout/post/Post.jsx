import "./Post.css";
import React from "react";
import ProfPicture from "../profPicture/ProfPicture";
import getPostDate from "../../funcional/getPostDate";

//import dos ícones
import likeIcoFill from "../../../media/icons/item_like_icon_fill.svg";
import likeIcoStroke from "../../../media/icons/item_like_icon_stroke.svg";
import commentIcoFill from "../../../media/icons/item_comment_icon_fill.svg";
import commentIcoStroke from "../../../media/icons/item_comment_icon_stroke.svg";
import shareIco from "../../../media/icons/item_share_icon_stroke.svg";
import rocketIco from "../../../media/icons/icons_apadrinhar_icon_fill.svg";

const Post = props => {
    //formatar horáario do post

    return (
        <div className="Post">
            <div className="post-header">
                <div className="header-prof-picture">
                    <ProfPicture src={props.profPicture} scale={80}/>
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
                <img src={require(`../../../media/post_media/${props.postMedia}`)} alt="Imagem do post" className="post-img"/>
            </div>
            <div className="post-engagement">
                <span className="likes">{props.qntLikes} likes</span> <span className="separatos">-</span>
                <span className="comments">{props.qntComments} comentários</span> <span className="separatos">-</span>
                <span className="shared">{props.qntShares} compartilhamentos</span>
            </div>
            <div className="post-actionBtns">
                <button className="btn btn-like"> <img src={likeIcoStroke} alt="icone de like" className="btn-ico"/> Curtir</button>
                <button className="btn btn-comment"><img src={commentIcoStroke} alt="icone de like" className="btn-ico"/> Comentar</button>
                <button className="btn btn-share"><img src={shareIco} alt="icone de like" className="btn-ico"/> Compartilhar</button>
                <button className="btn btn-apadrinhar"><img src={rocketIco} alt="icone de like" className="btn-ico"/>  Apadrinhar</button>
            </div>
        </div>
    );
}

export default Post;