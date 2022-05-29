import "./Cursos.css";

import React from "react";
import Menu from "../../componets/layout/Menu";
import Cursos from "../../componets/layout/cardCursos/CardCurso"
import administracaoicone from "../../media/icons/item_people_icon_stroke.svg"

const Curso = () => {
    return (
        <>
            <Menu />
            <div className="Cursos">

                <div className="categoriasCurso">
                    <ul>
                        <li>

                            <p>lore Todos os Cursos</p>
                        </li>
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
                    <div className="cardcurso" >

                        <Cursos />
                        <Cursos />
                        <Cursos />
                    </div>

                </div>


            </div>
        </>
    );
}

export default Curso;






