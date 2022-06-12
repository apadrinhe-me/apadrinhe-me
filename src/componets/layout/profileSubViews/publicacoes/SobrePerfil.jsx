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
                    a
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
                    <div className="engajamento-info"><strong>+3,5k</strong> <span>seguidores</span></div>
                    <div className="engajamento-info"><strong>+50</strong> <span>postagens</span></div>
                    <div className="engajamento-info"><strong>+45</strong> <span>recomendações</span></div>
                </div>
                <div className="my-column">
                    <div className="reputacao">
                        <h3>Reputação</h3>
                        <div className="reputacao-estrelas">
                            <div className="verified-logo">
                                <i className="bi bi-patch-check-fill"></i>
                            </div>
                            <div className="stars-icon">
                                <Rating name="read-only" value={4} readOnly/>
                            </div>
                        </div>
                    </div>
                    <div className="social-media">
                        <button><i class="bi bi-linkedin"></i></button>
                        <button><i class="bi bi-instagram"></i></button>
                        <button><i class="bi bi-youtube"></i></button>
                        <button><i class="bi bi-spotify"></i></button>
                    </div>
                </div>
            </div>
            <div className="profile-more-info">
                    <div className="profile-more-name">
                        <div>
                            <h3>Natan Barbosa</h3>
                            <span className="nickname">@natandevstack</span>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default SobrePerfil;