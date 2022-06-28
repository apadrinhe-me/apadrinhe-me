import "./Spotlights.css";
import React from "react";
import SpotlightProfile from "./SpotlightProfile";
import SpotlightCourse from "./SpotlightCourse";

const Spotlights = () => {
    return (
        <div className="Spotlights">
            <h3 className="spotlight-title">Perfis em destaque</h3>
            <div className="spotlight-profiles">
                <SpotlightProfile
                    pic="valentina.png"
                    name="Valentina"
                    description="Acumulou 100 pontos de atividade!"
                />
                <SpotlightProfile
                    pic="natan_proa.jpg"
                    name="Natan Barbosa"
                    description="Acumulou 50 pontos de atividade!"
                />

                <SpotlightProfile
                    pic="cris.jpg"
                    name="Cristian Ferreira"
                    description="Acumulou 43 pontos de atividade!"
                />
            </div>

            <h3 className="spotlight-title">Cursos em destaque</h3>
            <div className="spotlight-courses">
                <SpotlightCourse
                    banner="https://birchtree.nyc3.digitaloceanspaces.com/images/wwdc18/dev-dots.png"
                    nome="Desenvolvimento Web"
                    distribuidora="PROA"
                />
                <SpotlightCourse
                    banner="https://birchtree.nyc3.digitaloceanspaces.com/images/wwdc18/dev-dots.png"
                    nome="Desenvolvimento Web"
                    distribuidora="PROA"
                />
                <SpotlightCourse
                    banner="https://birchtree.nyc3.digitaloceanspaces.com/images/wwdc18/dev-dots.png"
                    nome="Desenvolvimento Web"
                    distribuidora="PROA"
                />
            </div>

        </div>
    );
}

export default Spotlights;