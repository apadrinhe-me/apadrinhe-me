import React from "react";
import { Routes, Route } from "react-router-dom";

//importando as páginas do projeto
import Cadastro from "../../views/pages/cadastro";
import Conexoes from "../../views/pages/conexoes";
import Cursos from "../../views/pages/cursos";
import Home from "../../views/pages/home";
import Login from "../../views/pages/login";
import Moments from "../../views/pages/moments";
import Perfil from "../../views/pages/perfil";

export default () => {
    return(
        <div className="Conteudo">
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/conexoes" element={<Conexoes />}/>
                <Route path="/cursos" element={<Cursos />}/>
                <Route path="/moments" element={<Moments />}/>
                <Route path="/perfil" element={<Perfil />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
            </Routes>
        </div>
    );
}