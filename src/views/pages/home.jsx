import "./home.css"
import React from "react";
import Menu from "../../componets/layout/Menu";
import Post from "../../componets/layout/post/Post";

const Home =  () => {
    return(
        <>
            <Menu />
            <div className="Home">
                <div className="infinity-post-scroll">
                    <Post profPicture="natan_proa.jpg" fullname="Natan Barbosa" aspiration="Aspirante a desenvolvedor fullstack" postDate="2022-04-19 12:30:25" />
                </div>

                <div className="spotlights">
                    destaques
                </div>
            </div>
        </>
    );
}

export default Home;