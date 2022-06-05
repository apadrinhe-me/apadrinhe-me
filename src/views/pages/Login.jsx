import "./Login.css"
import React from "react";
import Logo from "../../media/logo/logoredondo-03.svg"
import apadrinheme from "../../media/logo/apadrinhe-04.svg"


const Login = () => {
    return (
        <div className="Login">
            <div></div>
            <div className="principal_box">
                <div><a className="voltar" href="perfil">x</a></div>
                <div className="logo_box"><img className="logo" src={Logo} /></div>

                <div className="logo_apadrinheme"><img className="logoescrito" src={apadrinheme} width="45px" /></div>

                <input autocaptalize="none" placeholder="Usuário" type="text" className='user_input'></input>
                <input autocaptalize="none" placeholder="Senha" type="password" maxLength={8} className='password_input'></input>
                <p className="p1">Esqueci minha senha</p>
                <button>Entrar</button>
                <p className="p2">Não tem conta? <strong>Cadastre-se</strong></p>

            </div>

        </div>
    );
}

export default Login;
