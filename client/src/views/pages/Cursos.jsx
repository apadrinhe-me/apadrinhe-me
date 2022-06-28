import "./Cursos.css";

import React, {useState} from "react";
import Menu from "../../componets/layout/Menu";
import CardCurso from "../../componets/layout/cardCursos/CardCurso"


import Button from '@mui/material/Button';
import MenuMobile from "../../componets/layout/MenuMobile";
import Box from "@mui/material/Box";
import Contato from "../../componets/layout/chatComponents/contato/Contato";
import {Drawer} from "@mui/material";

const Cursos = () => {
    const [drawer, setDrawer] = useState(false);

    return (
        <>
            <Menu logged={false}/>
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
                                <Button onClick={ () => setDrawer(true)}><i className="bi bi-list"></i></Button>
                            </div>
                            <h2>Todos os Cursos</h2>
                            <div className="caixaFilter">
                                <i className="bi bi-funnel">Filtrar</i>
                            </div>

                        </span>

                    </div>
                    <div className="card my-scrollbar" >
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                        <CardCurso />
                    </div>
                </div>
            </div>

            <Drawer
                open={drawer}
                onClose={() => setDrawer(false)}
                sx={{color: "black", pt: "65px", background: "#6b6b6b"}}
            >
                <Box sx={{mt: "65px", display: "flex", flexDirection:"column", gap:"10px"}}>
                    <button className="btn-format drawer-close-btn" onClick={() => setDrawer(false)}><i className="bi bi-x-lg"></i></button>
                    <div className="categoriasCurso drawer-cursos">
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
                </Box>
            </Drawer>

            <MenuMobile logged={false} />
        </>
    );
}

export default Cursos;






