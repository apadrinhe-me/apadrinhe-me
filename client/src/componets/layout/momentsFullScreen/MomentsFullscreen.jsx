import "./MomentsFullscreen.css";
import React, { useEffect } from "react";
import ProfPicture from "../profPicture/ProfPicture";
import getPostDate from "../../funcional/getPostDate";

//import dos ícones
import likeIco from "../../../media/icons/item_like_icon_fill.svg";
import commentIco from "../../../media/icons/item_comment_icon_fill.svg";
import shareIco from "../../../media/icons/item_share_icon_stroke.svg";
import saveIco from "../../../media/icons/item_save_icon_fill.svg";
import CommentBox from "./CommentBox";
import Comment from "./Comment";

const MomentsFullscreen = props => {

    return (
        <div className="MomentsFullscreen">
            <div className="fulscreen-video">
                <button className="close-button" id="close-button" onClick={() => props.setFullscreen(0)}>X</button>
                <video className="momentsVideo" src={require("../../../media/moments_media/valentinamoments.mp4")} controls></video>
                <video className="backgroundFullscreenMoments" src={require("../../../media/moments_media/valentinamoments.mp4")} controls></video>
            </div>

            <div className="video-info">
                <div className="post-info-section">
                    <div className="user-info-box">
                        <ProfPicture src="valentina.png" scale={70} />
                        <div className="user-info">
                            <span className="text-primary">{props.nome} {props.id}</span>
                            <span className="text-secondary">Aspirante a Astrônoma</span>
                            <span className="text-secondary">{getPostDate("2022-05-23 14:40")}</span>
                        </div>
                        <div className="user-actions">
                            <button type="button" className="btn btn-follow">Seguir</button>
                            <button type="button" className="btn btn-more">...</button>
                        </div>
                    </div>

                    <div className="post-info-box">
                        <div className="post-title">Estudando muito para alcançar meus objetivos 😁📚</div>
                        <div className="post-description">Estudando muito para alcançar meus objetivos 😁📚 </div>
                        <div className="post-hashs">#Apadrinhe-me #Tecnologia #Educação</div>
                        <div className="post-actions">
                            <button className="btn-post"><img src={likeIco} alt="Botão de curtir" />Curtir</button>
                            <button className="btn-post"><img src={commentIco} alt="Botão de comentar" />Comentar</button>
                            <button className="btn-post"><img src={shareIco} alt="Botão de compartilhar" />Compartilhar</button>
                            <button className="btn-post"><img src={saveIco} alt="Botão de salvar" />Salvar</button>
                        </div>
                    </div>
                </div>

                <div className="comment-section">
                    <div className="your-comment-box">
                        <CommentBox />
                    </div>
                    <div className="users-comments-box">
                        <Comment id={1} />
                        <Comment id={2} />
                        <Comment id={3} />
                        <Comment id={4} />
                        <Comment id={5} />
                        <Comment id={5} />
                        <Comment id={5} />
                        <Comment id={5} />
                        <Comment id={5} />
                        <Comment id={5} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MomentsFullscreen;