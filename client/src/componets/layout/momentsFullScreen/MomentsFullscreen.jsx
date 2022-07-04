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
                <video className="momentsVideo" src={require("../../../media/moments_media/" + props.fullscreenInfo.video)} controls></video>
                <video className="backgroundFullscreenMoments" src={require("../../../media/moments_media/" + props.fullscreenInfo.video)} controls></video>
            </div>

            <div className="video-info">
                <div className="post-info-section">
                    <div className="user-info-box">
                        <ProfPicture src={props.fullscreenInfo.profile} scale={70} />
                        <div className="user-info">
                            <span className="text-primary">{props.fullscreenInfo.usuario}</span>
                            <span className="text-secondary">{props.fullscreenInfo.objetivo}</span>
                            <span className="text-secondary">{props.fullscreenInfo.data}</span>
                        </div>
                        <div className="user-actions">
                            <button type="button" className="btn btn-follow">Seguir</button>
                            <button type="button" className="btn btn-more">...</button>
                        </div>
                    </div>

                    <div className="post-info-box">
                        <div className="post-title">{props.fullscreenInfo.titulo}</div>
                        <div className="post-description">{props.fullscreenInfo.titulo} </div>
                        <div className="post-hashs">{props.fullscreenInfo.hashtag}</div>
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
                        <Comment id={1}
                            comentario="GOSTO!, vou te mandar um curso Valentina, voçê vai amar."
                            profile="gabriel.png"
                            usuario="Gabriel Augusto"
                            like="48"
                        />

                        <Comment id={2}
                            comentario="Amei coração! um beijo e um pão de queijo"
                            profile="adriana.jpg"
                            usuario="Adriana Parravano"
                            like="139"
                        />

                        <Comment id={3}
                            comentario="Isso mesmo valentina, nada de braço curto
                            amei❤💙"
                            profile="jailson.png"
                            usuario="Jailson Costa"
                            like="245"
                        />

                        <Comment id={4}
                            comentario="Valentina, pupila sempre muito focada, Beijo com afeto  🌹"
                            profile="aurora.png"
                            usuario="Aurora Seles"
                            like="365"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MomentsFullscreen;