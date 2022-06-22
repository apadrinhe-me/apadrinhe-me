import "./NewPost.css";
import React, { useState } from "react";
import ProfPicture from "../profPicture/ProfPicture";
import RocketImg from "../../../media/icons/icons_apadrinhar_icon_fill.svg";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import PopupContent from "./PopupContent";

//Estilizar a caixa de modal por aqui
const popupStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width: "100%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const NewPost = props => {
    const [postInput, setPostInput] = useState('');
    const [postType, setPostType] = useState('texto');
    const [openPost, setOpenPost] = useState(false);

    return (
        <>
            <div className="NewPost">
                <div className="post-input-box">
                    <div className="post-profile-pic">
                        <ProfPicture src={props.profPicture} scale="50px" />
                    </div>
                    <textarea id="post-input" className="post-input" placeholder="Começar publicação" value={postInput} onChange={e => { setPostInput(e.target.value) }} onClick={() => {
                        setOpenPost(true)
                        setPostType('texto')
                    }} readOnly></textarea>
                </div>

                <div className="post-btns">
                    <button className="btn-format btn-post" onClick={() => {
                        setOpenPost(true)
                        setPostType('foto')
                    }}><i className="bi bi-image-fill"></i> <span>Foto</span></button>

                    <button className="btn-format btn-post" onClick={() => {
                        setOpenPost(true)
                        setPostType('video')
                    }}><i className="bi bi-play-btn-fill"></i> <span>Vídeo</span></button>

                    <button className="btn-format btn-post" onClick={() => {
                        setOpenPost(true)
                        setPostType('texto')
                    }}><i className="bi bi-card-text"></i> <span>Texto</span></button>

                    <button className="btn-format btn-post" onClick={() => {
                        setOpenPost(true)
                        setPostType('apoio')
                    }}><img src={RocketImg} alt="rocket icon" height={20}/> <span>Me apoie</span></button>
                </div>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openPost}
                onClose={() => setOpenPost(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openPost}>
                    <Box sx={popupStyle}>
                        <PopupContent
                            postInput={postInput}
                            setPostInput={setPostInput}
                            postType={postType}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default NewPost;