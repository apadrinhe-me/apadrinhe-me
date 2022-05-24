import "./Moments.css";
import React, { useState } from "react";
import Menu from "../../componets/layout/Menu";
import MenuMobile from "../../componets/layout/MenuMobile";
import MomentsPost from "../../componets/layout/momentsPost/MomentsPost";
import ForYou from "../../componets/layout/forYou/ForYou";
import MomentsFullscreen from "../../componets/layout/momentsFullScreen/MomentsFullscreen";

const Moments =  () => {
    const[videoFullscreen, setVideoFullscreen] = useState(0);

    return(
        <>
            <Menu logged={true}/>
            <div className="Moments">
                <div className="container">
                    <aside className={videoFullscreen !== 0 ? "for-you fulscreenmode" : "for-you"} >
                        <ForYou />
                    </aside>
                    <main className={videoFullscreen !== 0 ? "moments-feed fulscreenmode" : "moments-feed"}>
                        <MomentsPost id={1} setFullscreen={setVideoFullscreen}/>
                        <MomentsPost id={2} setFullscreen={setVideoFullscreen}/>
                    </main>
                    <div className={videoFullscreen !== 0 ? "full-screen-post fulscreenmode" : "full-screen-post"}>
                        <MomentsFullscreen id={videoFullscreen} setFullscreen={setVideoFullscreen} />
                    </div>
                </div>
            </div>
            <MenuMobile atual="Home" logged={true} />
        </>
    );
}

export default Moments;
