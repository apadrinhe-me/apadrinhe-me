import "./Login.css"
import React from "react";
import Logo from "../../media/logo/logo.svg"


const Login = () => {
    return (
        <div className="login">
            <div className="voltar"><a href="perfil">Voltar</a></div>
            <div className="principal_box">
                <div className="logo"><img src={Logo} width="45px" /></div>
                <div className="break"></div>
                <div className="p"><p>apadrinhe-me</p></div>

            </div>

        </div>
    );
}

export default Login;
