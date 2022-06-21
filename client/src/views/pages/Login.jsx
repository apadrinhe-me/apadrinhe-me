import "./Login.css"
import React from "react";
import Logo from "../../media/logo/logoredondo-03.svg"
import apadrinheme from "../../media/logo/apadrinhe-04.svg"
import { Link } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup"

const Login = () => {

    const handleClickLogin = (values) => console.log(values);

    const validationLogin = yup.object().shape({
        usuario: yup
            .string()
            .email("Não é um email")
            .required("Este campo é obrigatório"),
        senha: yup
            .string()
            .min(8, "A senha possuir no minímo 8 caracteres")
            .required("Este campo é obrigatório"),
    });

    return (
        <div className="Login">
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>


                <form className="principal_box">
                    <div className="voltar-div"><Link className="voltar" to="/"><i className="bi bi-arrow-return-left"></i> Voltar para home</Link></div>
                    <div className="logo_box"><img className="logo" src={Logo} /></div>
                    <div className="logo_apadrinheme"><img className="logoescrito" src={apadrinheme} width="45px" /></div>

                    <Field name="usuario" placeholder="Usuário" type="text" className='user_input' />

                    <ErrorMessage
                        component="span"
                        name="usuario"
                        className="form-error"
                    />

                    <Field name="senha" placeholder="Senha" type="password" maxLength={8} className='password_input' />

                    <ErrorMessage
                        component="span"
                        name="senha"
                        className="form-error"
                    />

                    <span className="p1">Esqueci minha senha</span>
                    <button type="submit" >Entrar</button>
                    <p className="p2">Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
                </form>
            </Formik>
        </div>
    );
}

export default Login;
