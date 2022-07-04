import "./CursosFavoritos.css";
import React from "react";
import CardCurso from "../../cardCursos/CardCurso";

const CursosFavoritos = props => {
    return (
        <div className="CursosFavoritos">
            <h2>Cursos Favoritos</h2>
            <div className="cursos">
                <CardCurso
                    partnerLogo="tc.svg"
                    nomeCurso="Inteligência Artificial"
                    partnerName="Fundação T&C"
                    categoriaIco={<i className="bi bi-code-slash"></i>}
                    banneCurso="IA.jpeg"
                    duracao="100 horas"
                    localidade="Remoto"
                    conteudos="Inteligência artificial e conceitos bases"
                    descricao="A IA refere-se a sistemas ou máquinas que imitam a inteligência humana"
                />

                <CardCurso
                    partnerLogo="tc.svg"
                    nomeCurso="Python"
                    partnerName="Fundação T&C"
                    categoriaIco={<i className="bi bi-code-slash"></i>}
                    banneCurso="python.jpg"
                    duracao="60 horas"
                    localidade="Remoto"
                    conteudos="Introdução à logica de programação e principais conceitos python"
                    descricao="Instalação, recursos, tipo de dados, aplicativos, para um desenvolvimento melhor."
                />

                <CardCurso
                    partnerLogo="prime.png"
                    nomeCurso="Inteligência emocional"
                    partnerName="Prime cursos"
                    categoriaIco={<i className="bi bi-person"></i>}
                    banneCurso="inteligencia-emocional.jpg"
                    duracao="20 horas"
                    localidade="Remoto"
                    conteudos="Como lidar com as emoções"
                    descricao="A inteligência emocional está cada vez mais presente no mercado de trabalho. Portanto, nesse curso, você irá aprender a lidar com todas as realidades do mundo corporativo."
                />
            </div>
        </div>
    );
}

export default CursosFavoritos;