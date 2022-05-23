import "./Moments.css";
import React from "react";
import Menu from "../../componets/layout/Menu";
import MenuMobile from "../../componets/layout/MenuMobile";
import MomentsPost from "../../componets/layout/momentsPost/MomentsPost";
import ForYou from "../../componets/layout/forYou/ForYou";

const Moments =  () => {
    return(
        <>
            <Menu logged={true}/>
            <div className="Moments">
                <div className="container">
                    <aside className="for-you">
                        <ForYou />
                    </aside>
                    <main className="moments-feed">
                        <MomentsPost id={1}/>
                        <MomentsPost id={1}/>
                    </main>
                </div>
            </div>
            <MenuMobile atual="Home" logged={true} />
        </>
    );
}

export default Moments;
