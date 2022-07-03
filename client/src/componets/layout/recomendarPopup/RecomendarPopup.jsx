import React from "react";
import "./RecomendarPopup.css";
import LogoCurso from "../../../media/icons/IconsApoios/recomendation.svg";
import ProfPictire from "../profPicture/ProfPicture";
import CardCurso from "../cardCursos/CardCurso";

const RecomendarPopup = props => {
    return(
        <div className="RecomendarPopup">
            <button className="btn-format btn-close" onClick={props.handleCloseRecomendacao}><i className="bi bi-x-lg"></i></button>
            <div className="recomendar-header">
                <div className="d-flex">
                    <img src={LogoCurso} alt="logo de livro" height={60}/>
                    <h2>Recomendação</h2>
                </div>
                <div className="d-flex">
                    <ProfPictire src="valentina.png" scale={80}/>
                    <div>
                        <strong>Valentina</strong> <br />
                        <span className="aspiracao">Aspirante a desenvolvedora web</span>
                    </div>
                </div>
            </div>

            <div>
                <strong>Selecione o curso</strong> <br />
                <div className="selectCourse">
                    <div className="course">
                        <CardCurso />
                    </div>
                    <div className="course">
                        <CardCurso />
                    </div>
                    <div className="course">
                        <CardCurso />
                    </div>
                    <div className="course">
                        <CardCurso />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecomendarPopup;