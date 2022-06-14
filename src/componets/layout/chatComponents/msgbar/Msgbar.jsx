import React, { useState } from "react";
import "./Msgbar.css";

const Msgbar = props => {
    const[msgInput, setMsgInput] = useState("");

    return(
        <div className="Msgbar">
            <div className="emoji-div">
                <button className="btn-format btn-emoji"><i className="bi bi-emoji-smile"></i></button>
            </div>

            <div className="media-div">
                <button className="btn-format btn-media"><i className="bi bi-paperclip"></i></button>
            </div>

            <div className="msginput-div">
                <input type="text" className="msg-input" value={msgInput} onChange={e => setMsgInput(e.target.value)}/>
            </div>

            <div className="msgaudio-div">
                <button className="btn-format btn-audio"><i className="bi bi-mic-fill"></i></button>
            </div>
        </div>
    );
}

export default Msgbar;