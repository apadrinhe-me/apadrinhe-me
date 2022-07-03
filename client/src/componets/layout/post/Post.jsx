import "./Post.css";
import React, { useState } from "react";
import ProfPicture from "../profPicture/ProfPicture";
import getPostDate from "../../funcional/getPostDate";
import ButtonApoiar from "../buttonApoiar/ButtonApoiar";
import book from "../../../media/icons/item_cursos_icon_stroke.svg"
import { Link } from "react-router-dom";
import RecomendarPopup from "../recomendarPopup/RecomendarPopup";

//import dos ícones
import likeIcoFill from "../../../media/icons/item_like_icon_fill.svg";
import likeIcoStroke from "../../../media/icons/item_like_icon_stroke.svg";
import commentIcoFill from "../../../media/icons/item_comment_icon_fill.svg";
import commentIcoStroke from "../../../media/icons/item_comment_icon_stroke.svg";
import shareIco from "../../../media/icons/item_share_icon_stroke.svg";
import rocketIco from "../../../media/icons/icons_apadrinhar_icon_fill.svg";
import ApadPopup from "../apadPopup/ApadPopup";
import ButtonTwoFill from "../buttons/ButtonTwoFill";

//MUI
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: "calc(100vh - 120px)",
    overflowY: "auto",
    width: "100%",
    maxWidth: 800,
    bgcolor: '#181820',
    color: "#fff",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Post = props => {

    const [buttonPopup, setButtonPopup] = useState(false);

    if (buttonPopup) {
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        document.querySelector('body').style.overflowY = 'auto';
    }

    const [openRecomendacao, setOpenRecomendacao] = useState(false);
    const handleOpenRecomendacao = () => setOpenRecomendacao(true);
    const handleCloseRecomendacao = () => setOpenRecomendacao(false);

    return (
        <>
            <div className="Post">
                <div className="post-header">
                    <div className="header-prof-picture">
                        <ProfPicture src={props.profPicture} scale={50} />
                    </div>
                    <div className="header-prof-info">
                        <span className="fullname">{props.fullname}</span>
                        <span className="aspiration">{props.aspiration}</span>
                        <span className="postDate">{getPostDate(props.postDate)}</span>
                    </div>
                </div>
                <div className="post-description">
                    {props.postDescription}
                </div>
                <div className="post-media">
                    <img src={require(`../../../media/post_media/${props.postMedia}`)} alt="Imagem do post" className="post-img" />
                </div>
                <div className="post-engagement">
                    <span className="likes">{props.qntLikes} likes</span>
                    <div className="commentsShares">
                        <span className="comments">{props.qntComments} comentários</span>
                        <span className="shared">{props.qntShares} compartilhamentos</span>
                    </div>

                </div>
                <hr></hr>
                <div className="post-actionBtns">
                    <div className="reactions">
                        <button className="btn btn-like"> <img src={likeIcoStroke} alt="icone de like" className="btn-ico" /></button>
                        <button className="btn btn-comment"><img src={commentIcoStroke} alt="icone de like" className="btn-ico" /></button>
                        <button className="btn btn-share"><img src={shareIco} alt="icone de like" className="btn-ico" /></button>
                    </div>
                    <div className="recomendar_redirect">
                        <ButtonTwoFill onclick={handleOpenRecomendacao}>Recomendar</ButtonTwoFill>
                    </div>
                    <ButtonApoiar setButtonPopup={setButtonPopup} />

                </div>
            </div>

            <ApadPopup
                trigger={buttonPopup}
                setTrigger={setButtonPopup} />

            <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openRecomendacao}
                    onClose={handleCloseRecomendacao}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={openRecomendacao}>
                    <Box sx={style}>
                        <RecomendarPopup handleCloseRecomendacao={handleCloseRecomendacao} />
                    </Box>
                    </Fade>
                </Modal>
        </>
    );
}

export default Post;