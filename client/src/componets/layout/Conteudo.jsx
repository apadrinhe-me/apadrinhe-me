import React from "react";
import { Routes, Route } from "react-router-dom";

//importando as páginas do projeto
import Cadastro from "../../views/pages/Cadastro";
import Conexoes from "../../views/pages/Conexoes";
import Cursos from "../../views/pages/Cursos";
import Home from "../../views/pages/Home";
import Login from "../../views/pages/Login";
import Moments from "../../views/pages/Moments";
import Perfil from "../../views/pages/Perfil";
import Chat from "../../views/pages/Chat";

//importando as subpáginas do perfil

import Publicacoes from "./profileSubViews/publicacoes/Publicacoes";
import MomentsPosts from "./profileSubViews/momentsPosts/MomentsPosts";
import MapaCarreira from "./profileSubViews/mapaCarreira/MapaCarreira";
import CursosRecomendados from "./profileSubViews/cursosRecomendados/CursosRecomendados";
import CursosFavoritos from "./profileSubViews/cursosFavoritos/CursosFavoritos";
import HistoricoPad from "./profileSubViews/historicoPad/HistoricoPad";
import ListaJovensApad from "./profileSubViews/listaJovensApad/ListaJovensApad";
import NivelPadrinho from "./profileSubViews/nivelPadrinho/NivelPadrinho";
import EditorMapaCarreira from "./profileSubViews/mapaCarreira/editarMapaCarreira/EditorMapaCarreira";

const Conteudo = () => {
    return(
        <div className="Conteudo">
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/conexoes" element={<Conexoes />}/>
                <Route path="/cursos" element={<Cursos />}/>
                <Route path="/moments" element={<Moments />}/>
                <Route path="/login/:cadastro" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/chat" element={<Chat />}/>

                {/*Rotas do perfil*/}

                <Route path="/perfil/" element={
                    <Perfil>
                        <Publicacoes />
                    </Perfil>
                }/>
                <Route path="/perfil/publicacoes" element={
                    <Perfil>
                        <Publicacoes />
                    </Perfil>
                }/>
                <Route path="/perfil/moments" element={
                    <Perfil>
                        <MomentsPosts />
                    </Perfil>
                }/>
                <Route path="/perfil/mapacarreira" element={
                    <Perfil>
                        <MapaCarreira />
                    </Perfil>
                }/>
                <Route path="/perfil/cursosrecomendados" element={
                    <Perfil>
                        <CursosRecomendados />
                    </Perfil>
                }/>
                <Route path="/perfil/cursosfavoritos" element={
                    <Perfil>
                        <CursosFavoritos />
                    </Perfil>
                }/>
                <Route path="/perfil/historico" element={
                    <Perfil>
                        <HistoricoPad />
                    </Perfil>
                }/>
                <Route path="/perfil/apadrinhamentos" element={
                    <Perfil>
                        <ListaJovensApad />
                    </Perfil>
                }/>
                <Route path="/perfil/mapacarreira/editor" element={<EditorMapaCarreira/>}/>
            </Routes>
        </div>
    );
}

export default Conteudo