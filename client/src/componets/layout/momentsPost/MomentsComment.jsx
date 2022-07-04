import React, {useRef, useEffect} from "react";
import Comment from "../momentsFullScreen/Comment";
import CommentBox from "../momentsFullScreen/CommentBox";
import "./MomentsComment.css";

const MomentsComment = props => {
    const MomentsComment = useRef(null);

    function closePopup(){
        MomentsComment.current.classList.add('slideout');

        setTimeout(() => props.setOpenMobileComments(false), 680);
    }

    return(
        props.openMobileComments ? 
            <div className="MomentsComment" ref={MomentsComment}>
                <div className="comments-header">
                    <button className="btn-format" onClick={() => closePopup()}><i className="bi bi-x-lg"></i></button>
                </div>
                <CommentBox />
                <div className="comments">
                    <Comment/>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        : 
            ""
    );
}

export default MomentsComment;