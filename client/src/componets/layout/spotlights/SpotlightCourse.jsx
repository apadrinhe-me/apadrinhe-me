import "./SpotlightCourse.css";
import React from "react";
import { Link } from "react-router-dom";
import ButtonOneFill from "../buttons/ButtonOneFill";


const SpotlightCourse = props => {
    return (
        <div className="SpotlightCourse">
            <div className="course-banner">
                <img src={props.banner} alt="capa do curso" />
            </div>
            <div className="course-info">
                <h3 className="course-title">{props.nome}</h3>
                <span className="course-distributor">{props.distribuidora}</span>
            </div>
            <div className="course-redirect">
                <Link to="/cursos"> <ButtonOneFill>Ver detalhes</ButtonOneFill></Link>
            </div>
        </div>
    );
}

export default SpotlightCourse;