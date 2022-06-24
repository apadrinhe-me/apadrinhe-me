import "./sobrePerfil.css";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#D92588',
    }
});

const SobrePerfil = props => {
    return (
        <div className="SobrePerfil">
            <div className="sobre-title">
                <h2>Visão geral</h2>
            </div>
            <div className="sobre-nivel">
                <div className="emblema">
                    <img className="emblem-img" src={require("../../../../media/tags_rank/tag_aprendiz.svg").default} />
                </div>
                <div className="nivel-info">
                    <strong>Veterano II</strong>
                    <div className="xp-bar">
                        <div className="bar">
                            <ProgressBar />
                        </div>

                        <div className="bar-porcent">
                            <span>50%</span>
                        </div>
                    </div>
                    <div className="xp-info">
                        <span>1625xp</span>
                        <span>175xp para Veterano III</span>
                    </div>
                </div>
            </div>
            <div className="my-row">
                <div className="engajamento">
                    <div><strong>+3,5k</strong> <span>seguidores</span></div>
                    <div><strong>+50</strong> <span>postagens</span></div>
                    <div><strong>+45</strong> <span>recomendações</span></div>
                </div>
                <div className="my-column">
                    <div className="reputacao">
                        <h3>Reputação</h3>
                        <div className="reputacao-estrelas">
                            <div className="verified-logo">
                                <i className="bi bi-patch-check-fill"></i>
                            </div>
                            <div className="stars-icon">
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="social-media">
                        <button className="linkedinButton" ><i className="bi bi-linkedin"></i></button>
                        <button className="instagramButton" ><i className="bi bi-instagram"></i></button>
                        <button className="youtubeButton" ><i className="bi bi-youtube"></i></button>
                        <button className="spotifyButton" ><i className="bi bi-spotify"></i></button>
                    </div>
                </div>
            </div>
            <div className="profile-more-info">
                <div className="profile-more-name">
                    <div>
                        <h3>Valentina</h3>
                        <span className="nickname">@valentina</span>
                    </div>
                    <div className="my-ml-auto">
                        <button className="btn-format"><i className="bi bi-box-arrow-up"></i></button>
                    </div>
                </div>

                <div className="aspiration">
                    Quer se tornar uma astronoma
                </div>

                <div className="profile-bio">
                    <h3>Biografia</h3>
                    <p>Ola! eu sou a Valentina, tenho 16 anos e meu sonho é ser astronoma. Desde sempre gosto muito desse assunto e sempre busquei estudar astronomia, meus pais sempre me apoiaram, porém nunca tiveram uma condição suficiente para que sobrasse um pouco para investir na minha educação. Mas quando conheci o Apadrinhe-me minha vida mudou completamente, pois aqui tenho a oportunidade de continuar estudando com a ajuda de outras pessoas e realizar meu sonho, e mudar minha vida e da minha família.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default SobrePerfil;