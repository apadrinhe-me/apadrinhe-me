import "./Cursos.css";

import React from "react";
import Menu from "../../componets/layout/Menu";
import Curso from "../../componets/layout/cardCursos/CardCurso"


import Button from '@mui/material/Button';

const Cursos = () => {
    return (
        <>
            <Menu />
            <div className="Cursos">


                <div className="categoriasCurso">
                    <ul>
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

                <div className="cardsCursos ">
                    <div className="nome-pagina">

                        <span className="h2Filter">
                            <div className="cursos-mobile">
                                <Button ><i className="bi bi-list"></i></Button>
                            </div>
                            <h2>Todos os Cursos</h2>
                            <div className="caixaFilter">
                                <i className="bi bi-funnel">Filtrar</i>
                            </div>

                        </span>

                    </div>
                    <div className="card my-scrollbar" >
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                        <Curso />
                    </div>
                </div>
            </div>

            {/*<Offcanvas />*/}
        </>
    );
}

export default Cursos;






