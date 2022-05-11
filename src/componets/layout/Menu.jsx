import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../media/logo/logo.svg"
import "./Menu.css";

export default () => {
    return (
        <article className="Menu">
            <header className="header_main">
                <div className="container_max">


                    <div className="container_left">
                        <img src={Logo} width="45px" />
                        <input type="text" placeholder="Pesquisar..." className="search_bar" />
                    </div>

                    <div className="container_middle">
                        <ul className="nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/conexoes">Conexões</Link></li>
                            <li><Link to="/cursos">Cursos</Link></li>
                            <li><Link to="/moments">Moments</Link></li>
                        </ul>
                    </div>

                    <div className="container_right">
                        <Link className="user-profile_btn" to="/perfil">

                            <div>
                                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEMFO6yMCYjaQ/profile-displayphoto-shrink_200_200/0/1639491349201?e=1657756800&v=beta&t=V730pyqkTDzfhiWDYOPdleupWPRpv1WFUbm3AQh8fnY" />
                                <p>Alini</p>
                            </div>

                        </Link>

                        <ul className="login_control">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link className="sign-up_btn" to="/cadastro">Cadastro</Link></li>
                        </ul>

                    </div>
                </div>
            </header>



        </article>
    );
}