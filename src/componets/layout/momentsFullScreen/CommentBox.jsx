import "./CommentBox.css";
import React, { useState } from "react";

const CommentBox = () => {
    const [submitComment, setSubmitComment] = useState('');

    return(
        <div className="CommentBox">
            <textarea className="CommentTextArea" placeholder="Comente algo legal" value={submitComment} onChange={e => {
                setSubmitComment(e.target.value);
            }}></textarea>
            <button className="submitComment">Comentar</button>
        </div>
    );
}

export default CommentBox;