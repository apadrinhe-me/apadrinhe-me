import "./MomentsPost.css";
import React, { useState, useEffect } from "react";
import ProfPicture from "../profPicture/ProfPicture";

//import dos ícones
import likeIco from "../../../media/icons/item_like_icon_fill.svg";
import commentIco from "../../../media/icons/item_comment_icon_fill.svg";
import shareIco from "../../../media/icons/item_share_icon_stroke.svg";
import saveIco from "../../../media/icons/item_save_icon_fill.svg";

const MomentsPost = props => {
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

    useEffect(() => {
        document.querySelector("#btn-comment-" + props.id).addEventListener('click', () => {
            props.setFullscreen(props.id)
        })
    }, [])

    return (
        <div className="MomentsPost" id={`moments-${props.id}`}>
            <div className="user-info">
                <div className="user-profPic">
                    <ProfPicture src="valentina.png" scale={60} />
                </div>
                <div className="post-info">
                    <span className="text-bold">Valentina</span>
                    <span className="text-secondary">Aspirante a astrônoma</span>
                    <span className="text-secondary">19 de abril de 2022</span>
                </div>
                <div className="post-actions">
                    <button type="button" className="btn btn-follow">Seguir</button>
                    <button type="button" className="btn btn-more">...</button>
                </div>
            </div>

            <div className="post-title-hashs">
                <span className="post-title">Estudando muito para alcançar meus objetivos 😁📚</span>
                <span className="post-hashs">#Apadrinhe-me, #Tecnologia, #Educação,</span>
            </div>

            <div className="post-media">
                <div className="contain-video">
                    <div className="moments-video">
                        <video src={require("../../../media/moments_media/valentinamoments.mp4")} controls></video>
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
                        <span>1.2k</span>
                    </div>
                    <div className="btn-div">
                        <button><img src={commentIco} alt="Botão de Comentário" className="btn-icon" id={"btn-comment-" + props.id} /></button>
                        <span>1.2k</span>
                    </div>
                    <div className="btn-div">
                        <button><img src={shareIco} alt="Botão de compartilhamento" className="btn-icon" /></button>
                        <span>1.2k</span>
                    </div>
                    <div className="btn-div">
                        <button><img src={saveIco} alt="Botão de salvar" className="btn-icon" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MomentsPost;