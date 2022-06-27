import "./Login.css"
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../media/logo/logoredondo-03.svg"
import apadrinheme from "../../media/logo/apadrinhe-04.svg"
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { MyServer } from "../../services/api";

const Login = () => {
    const navigate = useNavigate();

    //verificar se está logado
    useEffect(() => {
        MyServer.get("/login").then(response => {
            //Não pode logado na página de login
            if (response.data.logged) {
                navigate("/");
            }
        })
    }, [])

    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");

    const msg_erro = useRef(null);
    const msg_erro_text = useRef(null);

    const handleSubmit = e => {
        if (emailLogin === "" && senhaLogin === "") {
            msg_erro.current.classList.add("show")
            msg_erro_text.current.innerHTML = "Preencha os dois campos"
        } else if (emailLogin.search('@') === -1) {
            msg_erro.current.classList.add("show")
            msg_erro_text.current.innerHTML = "Digite um email válido"
        } else {
            msg_erro.current.classList.remove("show")
            msg_erro_text.current.innerHTML = ""

            //logar
            MyServer
                .post("/login", {
                    email: emailLogin,
                    senha: senhaLogin
                }).then(response => {
                    if (response.data.logged) {
                        navigate("/");
                    } else {
                        msg_erro.current.classList.add("show")
                        msg_erro_text.current.innerHTML = response.data.msg
                    }
                })
        }

        e.preventDefault()
    }

    return (
        <div className="Login">
            <form className="principal_box" onSubmit={handleSubmit}>
                <div className="voltar-div"><Link className="voltar" to="/"><i className="bi bi-arrow-return-left"></i> Voltar para home</Link></div>
                <div className="logo_box"><img className="logo" src={Logo} /></div>
                <div className="logo_apadrinheme"><img className="logoescrito" src={apadrinheme} width="45px" /></div>

                <input name="email" placeholder="Email" type="text" className='user_input' value={emailLogin} onChange={e => setEmailLogin(e.target.value)} />

                <input name="senha" placeholder="Senha" type="password" className='password_input' value={senhaLogin} onChange={e => setSenhaLogin(e.target.value)} />

                <span className="p1">Esqueci minha senha</span>
                <button type="submit" >Entrar</button>
                <p className="p2">Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>

                <Alert severity="error" ref={msg_erro} className="msg_erro hide"><span className="msg_erro_text" ref={msg_erro_text}>ala</span></Alert>
            </form>
        </div>
    );
}

export default Login;
