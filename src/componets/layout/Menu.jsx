import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../media/logo/logo.svg"
import "./Menu.css";

export default () => {
    return (
        <header className="Menu">
            <img src={Logo} width="32px" />
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/conexoes">Conexões</Link></li>
                <li><Link to="/cursos">Cursos</Link></li>
                <li><Link to="/moments">Moments</Link></li>
            </ul>
            <ul className="user_options">
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
            </ul>
        </header>
    );
}