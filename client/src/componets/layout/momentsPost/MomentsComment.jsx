import React, { useRef, useEffect } from "react";
import Comment from "../momentsFullScreen/Comment";
import CommentBox from "../momentsFullScreen/CommentBox";
import "./MomentsComment.css";

const MomentsComment = props => {
    const MomentsComment = useRef(null);

    function closePopup() {
        MomentsComment.current.classList.add('slideout');

        setTimeout(() => props.setOpenMobileComments(false), 680);
    }

    return (
        props.openMobileComments ?
            <div className="MomentsComment" ref={MomentsComment}>
                <div className="comments-header">
                    <button className="btn-format" onClick={() => closePopup()}><i className="bi bi-x-lg"></i></button>
                </div>
                <CommentBox />
                <div className="comments">
                    <Comment id={1}
                        comentario="GOSTO!, vou te mandar um curso Valentina, voçê vai amar."
                        profile="gabriel.png"
                        usuario="Gabriel Augusto"
                        like="48"
                    />

                    <Comment id={2}
                        comentario="Amei coração! um beijo e um pão de queijo"
                        profile="adriana.jpg"
                        usuario="Adriana Parravano"
                        like="139"
                    />

                    <Comment id={3}
                        comentario="Isso mesmo valentina, nada de braço curto
                            amei❤💙"
                        profile="jailson.png"
                        usuario="Jailson Costa"
                        like="245"
                    />

                    <Comment id={4}
                        comentario="Valentina, pupila sempre muito focada, Beijo com afeto  🌹"
                        profile="aurora.png"
                        usuario="Aurora Seles"
                        like="365"
                    />
                </div>
            </div>
            :
            ""
    );
}

export default MomentsComment;