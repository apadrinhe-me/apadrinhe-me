import "./CursosRecomendados.css";
import React from "react";
import Recomendacao from "./recomendacao/Recomendacao";

const CursosRecomendados = props => {
    return (
        <div className="CursosRecomendados">
            <h2>Cursos Recomendados</h2>
            <div className="recomendacoes my-scrollbar">
                <Recomendacao
                    pessoa="Gabriel"
                    curso="Programação web para iniciantes - Instituto PROA"
                />
                <Recomendacao
                    pessoa="Diego"
                    curso="Programação web para iniciantes - Instituto PROA"
                />
                <Recomendacao
                    pessoa="Rosani"
                    curso="Inteligência emocional - Prime cursos"
                />
                <Recomendacao
                    pessoa="Aurora"
                    curso="Inteligência emocional - Prime cursos"
                />
                <Recomendacao
                    pessoa="Jailson"
                    curso="Python - Fundação T&C"
                />

                <Recomendacao
                    pessoa="Wagner"
                    curso="Inteligência Artificial -
                    Fundação T&C"
                />

                <Recomendacao
                    pessoa="Luis Gustavo"
                    curso="Responsabilidade Social e Sustentabilidade -
                    Fundação bradesco"
                />

            </div>
        </div>
    );
}

export default CursosRecomendados;