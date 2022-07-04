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
                        <CardCurso
                            partnerLogo="proa.png"
                            nomeCurso="ProProfissão"
                            partnerName="Instituto PROA"
                            categoriaIco={<i className="bi bi-code-slash"></i>}
                            banneCurso="banner_proa.jpg"
                            duracao="6 meses"
                            localidade="São Paulo - Lapa"
                            conteudos="Java Web Developtment"
                            descricao="Núcleo Técnico Desenvolve as competências técnicas do aluno em Programação Java por meio de trabalho em grupo, vivências corporativas, projetos e atividades. Núcleo Comportamental Desenvolve as competências sociocomportamentais e o perfil profissional do aluno por meio de atividades relacionadas ao autoconhecimento, propósito, carreira e mercado de trabalho."
                        />
                    </div>
                    <div className="course">
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
                    </div>
                    <div className="course">
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
                    <div className="course">
                        <CardCurso
                            partnerLogo="bradesco.ico"
                            nomeCurso="Responsabilidade Social e Sustentabilidade"
                            partnerName="Fundação bradesco"
                            categoriaIco={<i className="bi bi-graph-up"></i>}
                            banneCurso="responsabilidade-social.jpg"
                            duracao="15 horas"
                            localidade="Remoto"
                            conteudos="Principais artigos de responsabilidade social"
                            descricao="A inteligência emocional está cada vez mais presente no mercado de trabalho. Portanto, nesse curso, você irá aprender a lidar com todas as realidades do mundo corporativo."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecomendarPopup;