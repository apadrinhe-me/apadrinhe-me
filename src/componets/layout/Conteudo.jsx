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

const Conteudo = () => {
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

export default Conteudo