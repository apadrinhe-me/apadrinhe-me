import React from "react";
import Menu from "../../componets/layout/Menu";
import MenuMobile from "../../componets/layout/MenuMobile";
import "./Chat.css";

const Chat = () => {
    return(
        <>
            <Menu />

            <div className="Chat">
                <h1>Chatkk</h1>
            </div>

            <MenuMobile />
        </>
    );
}

export default Chat;