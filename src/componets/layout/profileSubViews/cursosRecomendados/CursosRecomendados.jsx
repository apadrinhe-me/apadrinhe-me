import "./CursosRecomendados.css";
import React from "react";
import Recomendacao from "./recomendacao/Recomendacao";

const CursosRecomendados = props => {
    return(
        <div className="CursosRecomendados">
            <h2>Cursos Recomendados</h2>
            <div className="recomendacoes my-scrollbar">
                <Recomendacao 
                    pessoa="João"
                    curso="Programação web para iniciantes"
                />

                <Recomendacao 
                    pessoa="João"
                    curso="Programação web para iniciantes"
                />

                <Recomendacao 
                    pessoa="João"
                    curso="Programação web para iniciantes"
                />

                <Recomendacao 
                    pessoa="João"
                    curso="Programação web para iniciantes"
                />

                <Recomendacao 
                    pessoa="João"
                    curso="Programação web para iniciantes"
                />

                <Recomendacao 
                    pessoa="João"
                    curso="Programação web para iniciantes"
                />

                <Recomendacao 
                    pessoa="João"
                    curso="Programação web para iniciantes"
                />

                <Recomendacao 
                    pessoa="João"
                    curso="Programação web para iniciantes"
                />
            </div>
        </div>
    );
}

export default CursosRecomendados;