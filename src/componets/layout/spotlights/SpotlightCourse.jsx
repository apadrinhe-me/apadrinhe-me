import "./SpotlightCourse.css";
import React from "react";
import {Link} from "react-router-dom";

const SpotlightCourse = props => {
    return(
        <div className="SpotlightCourse">
            <div className="course-banner">
                <img src={require(`../../../media/course_banners/${props.banner}`)} alt="capa do curso"/>
            </div>
            <div className="course-info">
                <h3 className="course-title">{props.nome}</h3>
                <span className="course-distributor">{props.distribuidora}</span>
            </div>
            <hr/>
            <div className="course-redirect">
                <Link to="/cursos"><button>Ver detalhes</button></Link>
            </div>
        </div>
    );
}

export default SpotlightCourse;