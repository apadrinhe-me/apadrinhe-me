import "./Spotlights.css";
import React from "react";
import SpotlightProfile from "./SpotlightProfile";
import SpotlightCourse from "./SpotlightCourse";

const Spotlights = () => {
    return(
        <div className="Spotlights">
            <h3 className="spotlight-title">Perfis em destaque</h3>
            <div className="spotlight-profiles">
                <SpotlightProfile
                    pic="natan_proa.jpg"
                    name="Natan Barbosa"
                    description="Acumulou 43 pontos de atividade!"
                />
                <SpotlightProfile
                    pic="natan_proa.jpg"
                    name="Natan Barbosa"
                    description="Acumulou 43 pontos de atividade!"
                />
                <SpotlightProfile
                    pic="natan_proa.jpg"
                    name="Natan Barbosa"
                    description="Acumulou 43 pontos de atividade!"
                />
            </div>

            <h3 className="spotlight-title">Cursos em destaque</h3>
            <div className="spotlight-courses">
                <SpotlightCourse
                banner="html-course.jpg"
                nome="Curso de desenvolvimento web"
                distribuidora="Warner Bros"
                />
                <SpotlightCourse
                banner="html-course.jpg"
                nome="Curso de desenvolvimento web"
                distribuidora="Warner Bros"
                />
                <SpotlightCourse
                banner="html-course.jpg"
                nome="Curso de desenvolvimento web"
                distribuidora="Warner Bros"
                />
            </div>

        </div>
    );
}

export default Spotlights;