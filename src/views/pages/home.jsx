import "./Home.css"
import React from "react";
import Menu from "../../componets/layout/Menu";
import If from "../../componets/funcional/If";

const Home =  () => {
    return(
        <>
            <Menu />
            <div className="Home">
                <div className="infinity-post-scroll">
                    <div>Post 1</div>
                </div>

                <div className="spotlights">
                    destaques
                </div>
            </div>
        </>
    );
}

export default Home;