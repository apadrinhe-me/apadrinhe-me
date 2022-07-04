import "./Cursos.css";

import React, { useState, useEffect } from "react";
import Menu from "../../componets/layout/Menu";
import CardCurso from "../../componets/layout/cardCursos/CardCurso"


import Button from '@mui/material/Button';
import MenuMobile from "../../componets/layout/MenuMobile";
import Box from "@mui/material/Box";
import Contato from "../../componets/layout/chatComponents/contato/Contato";
import { Drawer } from "@mui/material";
import { MyServer } from "../../services/api";

//IMG Parceiros
import AluraLogo from "../../media/course_partners/alura.png";
import BradescoLogo from "../../media/course_partners/bradesco.ico";
import UdemyLogo from "../../media/course_partners/Udemy.webp";
import ProaLogo from "../../media/course_partners/proa.png";
import PrimeLogo from "../../media/course_partners/prime.png";
import TCLogo from "../../media/course_partners/tc.svg";

let login;

const Cursos = () => {
    const [drawer, setDrawer] = useState(false);

    const [logged, setLogged] = useState(false);

    //verificar se está logado
    useEffect(() => {
        MyServer.get("/login").then(response => {
            //Não pode logado na página de login
            if (response.data.logged) {
                login = response.data.user;
                setLogged(true)
            }
        })
    }, [])

    return (
        <>
            <Menu logged={logged} atual="Cursos"/>
            <div className="Cursos">
                <div className="categoriasCurso">
                    <h4 className="categoria-title">Categorias</h4>
                    <ul>
                        <li>
                            <i className="bi bi-graph-up caixaIconeCategoriasCurso"></i>
                            <p>Administração</p>
                        </li>
                        <li>
                            <i className="bi bi-code-slash caixaIconeCategoriasCurso"></i>
                            <p>Tecnologia</p>
                        </li>
                        <li>
                            <i className="bi bi-cash-coin caixaIconeCategoriasCurso"></i>
                            <p>Contabilidade e Finanças</p>
                        </li>
                        <li>
                            <i className="bi bi-person caixaIconeCategoriasCurso"></i>
                            <p>Desenvolvimento Pessoal</p>
                        </li>
                        <li>
                            <i className="bi bi-book caixaIconeCategoriasCurso"></i>
                            <p>Educação</p>
                        </li>
                    </ul>

                    <br />
                    <h4 className="categoria-title">Instituições</h4>
                    <ul>
                        <li className="partner">
                            <img src={TCLogo} alt="Logo Alura"/>
                            <p>Fundação T&C</p>
                        </li>
                        <li className="partner">
                            <img src={AluraLogo} alt="Logo Alura"/>
                            <p>Alura</p>
                        </li>
                        <li className="partner">
                            <img src={UdemyLogo} alt="Logo Alura"/>
                            <p>Udemy</p>
                        </li>
                        <li className="partner">
                            <img src={BradescoLogo} alt="Logo Alura"/>
                            <p>Fundação Bradesco</p>
                        </li>
                        <li className="partner">
                            <img src={ProaLogo} alt="Logo Alura"/>
                            <p>PROA</p>
                        </li>
                        <li className="partner">
                            <img src={PrimeLogo} alt="Logo Alura"/>
                            <p>Prime Cursos</p>
                        </li>
                    </ul>
                </div>

                <div className="cardsCursos ">
                    <div className="nome-pagina">

                        <span className="h2Filter">
                            <div className="cursos-mobile">
                                <Button onClick={() => setDrawer(true)}><i className="bi bi-list"></i></Button>
                            </div>
                            <h2>Todos os Cursos</h2>
                            <div className="caixaFilter">
                                <i className="bi bi-funnel">Filtrar</i>
                            </div>

                        </span>

                    </div>
                    <div className="card my-scrollbar" >
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

                        <CardCurso 
                            partnerLogo="bradesco.ico"
                            nomeCurso="Responsabilidade Social e Sustentabilidade"
                            partnerName="Fundação bradesco"
                            categoriaIco={<i className="bi bi-graph-up"></i>}
                            banneCurso="responsabilidade-social.jpg"
                            duracao="15 horas"
                            localidade="Remoto"
                            conteudos="Nos dias de hoje, a preocupação com a sustentabilidade não é só dos cidadãos, mas também das grandes empresas. Conheça quais são suas responsabilidades perante à esse tema"
                        />
                    </div>
                </div>
            </div>

            <Drawer
                open={drawer}
                onClose={() => setDrawer(false)}
                sx={{ color: "black", pt: "65px", background: "#6b6b6b" }}
            >
                <Box sx={{ mt: "65px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <button className="btn-format drawer-close-btn" onClick={() => setDrawer(false)}><i className="bi bi-x-lg"></i></button>
                    <div className="categoriasCurso drawer-cursos">
                        <ul>
                            <li><h4>Categorias</h4></li>
                            <li>
                                <i className="bi bi-book-fill caixaIconeCategoriasCurso"></i>

                                <p>Todos os Cursos</p>
                            </li>
                            <li>
                                <i className="bi bi-graph-up caixaIconeCategoriasCurso"></i>
                                <p>Administração</p>
                            </li>
                            <li>
                                <i className="bi bi-laptop caixaIconeCategoriasCurso"></i>
                                <p>Tecnologia</p>
                            </li>
                            <li>
                                <i className="bi bi-graph-up caixaIconeCategoriasCurso"></i>
                                <p>Contabilidade e Finanças</p>
                            </li>
                            <li>
                                <i className="bi bi-laptop caixaIconeCategoriasCurso"></i>
                                <p>Desenvolvimento Pessoal</p>
                            </li>
                            <li>
                                <i className="bi bi-laptop caixaIconeCategoriasCurso"></i>
                                <p>Educação</p>
                            </li>
                            <li>
                                <i className="bi bi-laptop caixaIconeCategoriasCurso"></i>
                                <p>Fundação TeC</p>
                            </li>
                            <li>
                                <i className="bi bi-laptop caixaIconeCategoriasCurso"></i>
                                <p>Favoritos</p>
                            </li>
                        </ul>
                    </div>
                </Box>
            </Drawer>

            <MenuMobile logged={false} atual="Cursos"/>
        </>
    );
}

export default Cursos;






