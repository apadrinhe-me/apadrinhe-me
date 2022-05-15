import "./Home.css"
import React from "react";
import Menu from "../../componets/layout/Menu";

const Home =  () => {
    return(
        <>
            <Menu />
            <div className="Home">
                <h1>Home</h1>
            </div>
        </>
    );
}

export default Home;