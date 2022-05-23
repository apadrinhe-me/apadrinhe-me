import "./MomentsPost.css";
import React from "react";
import ProfPicture from "../profPicture/ProfPicture";

//import dos ícones
import likeIco from "../../../media/icons/item_like_icon_fill.svg";
import commentIco from "../../../media/icons/item_comment_icon_fill.svg";
import shareIco from "../../../media/icons/item_share_icon_stroke.svg";
import saveIco from "../../../media/icons/item_save_icon_fill.svg";

const MomentsPost = props => {
    return(
        <div className="MomentsPost" id={`moments-${props.id}`}>
            <div className="user-info">
                <div className="user-profPic">
                    <ProfPicture src="natan_proa.jpg" scale={60} />
                </div>
                <div className="post-info">
                    <span className="text-bold">props.username</span>
                    <span className="text-secondary">props.userAspiration</span>
                    <span className="text-secondary">props.postDate</span>
                </div>
                <div className="post-actions">
                    <button type="button" className="btn btn-follow">Seguir</button>
                    <button type="button" className="btn btn-more">...</button>
                </div>
            </div>

            <div className="post-title-hashs">
                <span className="post-title">Eis que a 10/10 kkkkkk</span>
                <span className="post-hashs">#10/10, #tumor, #picadas</span>
            </div>

            <div className="post-media">
                <div className="contain-video">
                    <div className="moments-video">
                        <video src={require("../../../media/moments_media/moments_video.mp4")} controls></video>
                    </div>
                </div>

                <div className="moments-interactions">
                    <div className="btn-div">
                        <button><img src={likeIco} alt="Botão de like" className="btn-icon"/></button>
                        <span>1.2k</span>
                    </div>
                    <div className="btn-div">
                        <button><img src={commentIco} alt="Botão de like" className="btn-icon"/></button>
                        <span>1.2k</span>
                    </div>
                    <div className="btn-div">
                        <button><img src={shareIco} alt="Botão de like" className="btn-icon"/></button>
                        <span>1.2k</span>
                    </div>
                    <div className="btn-div">
                        <button><img src={saveIco} alt="Botão de like" className="btn-icon"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MomentsPost;