import "./Cursos.css";

import React from "react";
import Menu from "../../componets/layout/Menu";
import Curso from "../../componets/layout/cardCursos/CardCurso"
import administracaoicone from "../../media/icons/item_people_icon_stroke.svg"
import Offcanvas from "../../componets/layout/offcanvas/Offcanvas";
import bootstrap from "bootstrap";

const Cursos = () => {
    return (
        <>
            <Menu />
            <div className="Cursos">

                <div className="cursos-mobile">
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Categorias de cursos</button>
                </div>

                <div className="categoriasCurso">
                    <ul>
                        <li>Todos os Cursos</li>
                        <li>Administração</li>
                        <li>Tecnologia</li>
                        <li>Contabilidade e Finanças</li>
                        <li>Desenvolvimento Pessoal</li>
                        <li>Educação</li>
                        <li>Fundação TeC</li>
                        <li>Favoritos</li>
                    </ul>
                </div>

                <div className="cardsCursos border">
                    <div className="nome-pagina">
                        <h2>Todos os Cursos</h2>
                        <button><img src="" alt="" />óia</button>
                    </div>

                    <div className="card my-scrollbar" >
                        <Curso />
                        <Curso />
                        <Curso />
                    </div>
                </div>
            </div>

            <Offcanvas />
        </>
    );
}

export default Cursos;






