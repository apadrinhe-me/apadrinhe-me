import "./MomentsPost.css";
import React, { useState, useEffect, useRef } from "react";
import ProfPicture from "../profPicture/ProfPicture";

//import dos ícones
import likeIco from "../../../media/icons/item_like_icon_fill.svg";
import commentIco from "../../../media/icons/item_comment_icon_fill.svg";
import shareIco from "../../../media/icons/item_share_icon_stroke.svg";
import saveIco from "../../../media/icons/item_save_icon_fill.svg";
import MomentsComment from "./MomentsComment";



const MomentsPost = props => {
    const [openMobileComments, setOpenMobileComments] = useState(false);

    function nextPost() {
        try {
            document.querySelector(`#moments-${props.id + 1}`).scrollIntoView({
                behavior: 'smooth'
            });
        } catch (error) {
            alert('Não há mais vídeos por enquanto :( \n volte mais tarde');
        }
    }

    function prevPost() {
        try {
            document.querySelector(`#moments-${props.id - 1}`).scrollIntoView({
                behavior: 'smooth'
            });
        } catch (error) {
            alert('Esse era o primeiro vídeo');
        }
    }

    /*useEffect(() => {
        document.querySelector("#btn-comment-" + props.id).addEventListener('click', () => {
            if (window.innerWidth < 576) {
                setOpenMobileComments(true)
            } else {
                props.setFullscreen(props.id)
            }
        })
    })*/

    return (
        <>
            <div className="MomentsPost" id={`moments-${props.id}`}>
                <div className="user-info">
                    <div className="user-profPic">
                        <ProfPicture src={props.profile} scale={60} />
                    </div>
                    <div className="post-info">
                        <span className="text-bold">{props.usuario}</span>
                        <span className="text-secondary">{props.objetivo}</span>
                        <span className="text-secondary">{props.data}</span>
                    </div>
                    <div className="post-actions">
                        <button type="button" className="btn btn-follow">Seguir</button>
                        <button type="button" className="btn btn-more">...</button>
                    </div>
                </div>

                <div className="post-title-hashs">
                    <span className="post-title">{props.titulo}</span>
                    <span className="post-hashs">{props.hashtag}</span>
                </div>

                <div className="post-media">
                    <div className="contain-video">
                        <div className="moments-video">
                            <video src={require("../../../media/moments_media/" + props.video)} controls></video>
                        </div>
                    </div>

                    <div className="moments-interactions">
                        <div className="btn-div prev-next-btns">
                            <button onClick={e => {
                                prevPost();
                            }}>&uarr;</button>

                            <button onClick={e => {
                                nextPost();
                            }}>&darr;</button>
                        </div>

                        <div className="btn-div">
                            <button><img src={likeIco} alt="Botão de like" className="btn-icon" /></button>
                            <span>{props.like}</span>
                        </div>
                        <div className="btn-div">
                            <button id={"btn-comment-" + props.id} onClick={() => {
                                if (window.innerWidth < 576) {
                                    setOpenMobileComments(true)
                                } else {
                                    props.setFullscreen(props.id)
                                    props.setFullscreenInfo(props);
                                }
                            }}><img src={commentIco} alt="Botão de Comentário" className="btn-icon"/></button>
                            <span>{props.comentario}</span>
                        </div>
                        <div className="btn-div">
                            <button><img src={shareIco} alt="Botão de compartilhamento" className="btn-icon" /></button>
                            <span>{props.compartilhamento}</span>
                        </div>
                        <div className="btn-div">
                            <button><img src={saveIco} alt="Botão de salvar" className="btn-icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <MomentsComment setOpenMobileComments={setOpenMobileComments} openMobileComments={openMobileComments} />
        </>
    );
}

export default MomentsPost;