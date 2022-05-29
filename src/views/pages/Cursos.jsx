import "./Cursos.css";

import React from "react";
import Menu from "../../componets/layout/Menu";
import Cursos from "../../componets/layout/cardCursos/CardCurso"
import administracaoicone from "../../media/icons/item_people_icon_stroke.svg"

const Curso = () => {
    return (
        <>
            <Menu />
            <div className="Cursos border">

                <div className="categoriasCurso">
                    <ul>
                        <li>Todos os Cursos</li>
                        <li>    Administração</li>
                        <li>  Tecnologia</li>
                        <li>  Contabilidade e Finanças</li>
                        <li>  Desenvolvimento Pessoal</li>
                        <li>  Educação</li>
                        <li>  Fundação TeC</li>
                        <li>  Favoritos</li>
                    </ul>
                </div>

                <div className="cardsCursos">
                    <div>
                        <h2>Todos os Cursos</h2>
                        <button><img src="" alt="" /></button>
                    </div>

                    <div className="card" >
                        <ul>
                            <li><Cursos /></li>
                            <li><Cursos /></li>
                            <li> <Cursos /></li>
                        </ul>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Curso;






