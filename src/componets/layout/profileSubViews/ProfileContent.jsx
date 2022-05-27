import React from "react";
import { Routes, Route } from "react-router-dom";

//importando as páginas do projeto
import Publicacoes from "./publicacoes/Publicacoes";
import MomentsPosts from "./momentsPosts/MomentsPosts";
import MapaCarreira from "./mapaCarreira/MapaCarreira";
import CursosRecomendados from "./cursosRecomendados/CursosRecomendados";
import CursosFavoritos from "./cursosFavoritos/CursosFavoritos";
import ListaCursosPad from "./listaCursosPad/ListaCursosPad";
import ListaJovensApad from "./listaJovensApad/ListaJovensApad";
import NivelPadrinho from "./nivelPadrinho/NivelPadrinho";


const ProfileContent = () => {
    return(
        <div className="ProfileContent">
            <Routes>
                <Route path="/perfil/publicacoes" element={ <Publicacoes /> }/>
                <Route path="/perfil/moments" element={ <MomentsPosts /> }/>
                <Route path="/perfil/mapacarreira" element={<MapaCarreira />}/>
                <Route path="/perfil/cursosrecomendados" element={<CursosRecomendados />}/>
                <Route path="/perfil/cursosfavoritos" element={<CursosFavoritos />}/>
                <Route path="/perfil/recomendacoes" element={<ListaCursosPad />}/>
                <Route path="/perfil/apadrinhamentos" element={<ListaJovensApad />}/>
                <Route path="/perfil/nivelpadrinho" element={<NivelPadrinho />}/>
            </Routes>
        </div>
    );
}

export default ProfileContent