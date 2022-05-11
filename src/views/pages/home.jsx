import "./home.css"
import React from "react";
import Menu from "../../componets/layout/Menu";

const home =  () => {
    return(
        <>
            <Menu />
            <div className="home">
                <h1>Home</h1>
            </div>
        </>
    );
}

export default home;