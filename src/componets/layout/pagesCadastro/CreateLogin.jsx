import React from "react";
import "./CreateLogin.css"

import TextField from '@mui/material/TextField';

const CreateLogin = props => {
    console.log(props)

    return (
        <div className="CreateLogin">
            <div className="return-previous-step">
                <button className="btn-format btn-return" onClick={() => props.setCadEtapa(0)}><i className="bi bi-arrow-return-left"></i> Voltar para etapa {props.cadEtapa}</button>
            </div>
            <div className="cad_msg">
                <span>Primeiramente vamos criar o seu login na plataforma.</span>
                <span> Essas serão as informações que você usará para entrar daqui para frente. Anote-as bem 😉</span>
            </div>
            <div className="CreateLogin-form">
                <TextField id="email-login" label="Email" variant="outlined" fullWidth required type="email" value={props.email} onChange={e => props.setEmail(e.target.value)} placeholder="nome@email.com"/>
                <TextField id="senha-login" label="Senha" variant="outlined" fullWidth required type="password" value={props.senha} onChange={e => props.setSenha(e.target.value)}/>
                <TextField id="confirm-senha-login" label="Confirme sua senha" variant="outlined" fullWidth required type="password" value={props.confirmSenha} onChange={e => props.setConfirmSenha(e.target.value)}/>
            </div>
            <button className="continue-cad-btn" onClick={() => props.proximaEtapa(1)}>Continuar</button>
        </div>
    );
}
export default CreateLogin