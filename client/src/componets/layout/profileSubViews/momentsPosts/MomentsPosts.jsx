import "./MomentsPosts.css";
import React, {useState, useEffect} from "react";
import MomentsPost from "../../momentsPost/MomentsPost";
import MomentsFullscreen from "../../momentsFullScreen/MomentsFullscreen";

const MomentsPosts = props => {
    const [videoFullscreen, setVideoFullscreen] = useState(0);
    const [fullscreenInfo, setFullscreenInfo] = useState({});

    return (
        <div className="MomentsPosts my-scrollbar">
            <MomentsPost
                id={1}
                setFullscreen={setVideoFullscreen}
                setFullscreenInfo={setFullscreenInfo}
                usuario="Valentina"
                data="19 de abril de 2022"
                hashtag="#Apadrinhe-me, #Tecnologia, #Educação,"
                objetivo="Aspirante a astrônoma"
                titulo="Estudando muito para alcançar meus objetivos 😁📚"
                profile="valentina.png"
                video="valentinamoments.mp4"
                like="2.2k"
                comentario="1.2k"
                compartilhamento="1.1k"
            />

            <div className={videoFullscreen !== 0 ? "full-screen-post fulscreenmode" : "full-screen-post"}>
                {videoFullscreen !== 0 ?
                    <MomentsFullscreen id={videoFullscreen} setFullscreen={setVideoFullscreen} fullscreenInfo={fullscreenInfo} />
                    :
                    ""
                }

            </div>
        </div>
    );
}

export default MomentsPosts;