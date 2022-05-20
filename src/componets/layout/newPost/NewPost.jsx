import "./NewPost.css";
import React, { useState } from "react";
import ProfPicture from "../profPicture/ProfPicture";

const NewPost = props => {
    const[postInput, setPostInput] = useState('');

    return(
        <div className="NewPost">
            <div className="post-input-box">
                <div className="post-profile-pic">
                    <ProfPicture src={props.profPicture} scale="100%"/>
                </div>
                <textarea id="post-input" className="post-input" placeholder="Começar publicação" value={postInput} onChange={e => {setPostInput(e.target.value)}}></textarea>
            </div>
            <div className="post-actions">
                <button className="btn-actions">Foto</button>
                <button className="btn-actions">Vídeo</button>
                <button className="btn-actions">Evento</button>
                <button className="btn-actions">Escrever artigo</button>
            </div>
        </div>
    );
}

export default NewPost;