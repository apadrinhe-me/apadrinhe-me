import "./Login.css"
import React from "react";
import Logo from "../../media/logo/logoredondo-03.svg"
import apadrinheme from "../../media/logo/apadrinhe-04.svg"
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="Login">
            <div></div>
            <div className="principal_box">
                <div className="voltar-div"><Link className="voltar" to="/"><i className="bi bi-arrow-return-left"></i> Voltar para home</Link></div>
                <div className="logo_box"><img className="logo" src={Logo} /></div>

                <div className="logo_apadrinheme"><img className="logoescrito" src={apadrinheme} width="45px" /></div>

                <input placeholder="Usuário" type="text" className='user_input'></input>
                <input placeholder="Senha" type="password" maxLength={8} className='password_input'></input>
                <span className="p1">Esqueci minha senha</span>
                <button onClick={() => window.location.href="/"}>Entrar</button>
                <p className="p2">Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>

            </div>

        </div>
    );
}

export default Login;
