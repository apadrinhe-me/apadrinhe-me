import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return(
        <div className="Menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/conexoes">Conexões</Link></li>
                <li><Link to="/cursos">Cursos</Link></li>
                <li><Link to="/moments">Moments</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
            </ul>
        </div>
    );
}