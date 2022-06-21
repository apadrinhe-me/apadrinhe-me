import "./CursosFavoritos.css";
import React from "react";
import CardCurso from "../../cardCursos/CardCurso";

const CursosFavoritos = props => {
    return(
        <div className="CursosFavoritos">
            <h2>Cursos Favoritos</h2>
            <div className="cursos">
                <CardCurso />
                <CardCurso />
                <CardCurso />
            </div>
        </div>
    );
}

export default CursosFavoritos;