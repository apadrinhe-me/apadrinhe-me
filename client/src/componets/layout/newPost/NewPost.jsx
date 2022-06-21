import "./NewPost.css";
import React, { useState } from "react";
import ProfPicture from "../profPicture/ProfPicture";

const NewPost = props => {
    const [postInput, setPostInput] = useState('');

    return (
        <div className="NewPost">
            <div className="post-input-box">
                <div className="post-profile-pic">
                    <ProfPicture src={props.profPicture} scale="50px" />
                </div>
                <textarea id="post-input" className="post-input" placeholder="Começar publicação" value={postInput} onChange={e => { setPostInput(e.target.value) }}></textarea>
            </div>
            <div className="post-btns border">
                <button className="btn-format btn-post"> <i className="bi bi-camera"></i> <span>Foto</span></button>
            </div>
        </div>
    );
}

export default NewPost;