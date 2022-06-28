import React, {useEffect} from "react";
import "./EnderecoCadastro.css";

import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';

import {ApiCorreios} from "../../../services/api";

const EnderecoCadastro = props => {


    useEffect(() => {
        if(props.cep.length === 8){
            ApiCorreios
                .get(`/ws/${props.cep}/json/`)
                .then((response) => {
                    if (response.data.erro){
                        props.setCepValido(false)
                    } else {
                        props.setCepValido(true)
                        props.setUf(response.data.uf)
                        props.setCidade(response.data.localidade)
                        props.setBairro(response.data.bairro)
                        props.setRua(response.data.logradouro)
                    }
                })
                .catch((err) => {
                    alert("erro ao acessar seu CEP. Tente novamente")
                });
        } else {
            props.setUf("")
            props.setCidade("")
            props.setBairro("")
            props.setRua("")
        }
    }, [props]);


    return(
        <div className="EnderecoCadastro">
            <div className="return-previous-step">
                <button className="btn-format btn-return" onClick={() => props.precisaResponsavel ? props.setCadEtapa(3) : props.setCadEtapa(2)}><i className="bi bi-arrow-return-left"></i> Voltar para etapa {props.precisaResponsavel ? 4 : 3}</button>
            </div>
            <div className="cad_msg">
                <span>Precisamos de seu endereço caso queria doar ou receber um material e para gerar extratos.</span>
                <span>Não se preocupe. Não compartilhamos essa informação com ninguém</span>
                <span>Dica: Preencha o CEP para autopreencher os outros campos</span>
            </div>

            <div className="endereco-info-form">
                <Grid container direction="row" spacing={3}>
                    <Grid item container direction="column" spacing={2} flex={1}>
                        <Grid item><TextField id="endereco-cep" label="CEP" placeholder="Ex.: 12345678" variant="outlined" fullWidth required value={props.cep} onChange={e => props.setCep(e.target.value)}/></Grid>
                        <Grid item><TextField id="endereco-uf" label="UF" placeholder="Estado" variant="outlined" fullWidth required value={props.uf} onChange={e => props.setUf(e.target.value)}/></Grid>
                        <Grid item><TextField id="endereco-cidade" label="Cidade" variant="outlined" fullWidth required value={props.cidade} onChange={e => props.setCidade(e.target.value)}/></Grid>
                        <Grid item><TextField id="endereco-bairro" label="Bairro" variant="outlined" fullWidth required value={props.bairro} onChange={e => props.setBairro(e.target.value)}/></Grid>
                    </Grid>

                    <Grid item container direction="column" spacing={2} flex={1}>
                        <Grid item><TextField id="endereco-rua" label="Rua" variant="outlined" fullWidth required value={props.rua} onChange={e => props.setRua(e.target.value)}/></Grid>
                        <Grid item><TextField id="endereco-numero" label="Número" variant="outlined" fullWidth required value={props.numero} onChange={e => props.setNumero(e.target.value)}/></Grid>
                        <Grid item><TextField id="endereco-complemento" label="Complemento" variant="outlined" fullWidth value={props.complemento} onChange={e => props.setComplemento(e.target.value)}/></Grid>
                    </Grid>
                </Grid>
            </div>

            <button className="continue-cad-btn" onClick={() => props.proximaEtapa(4)}>Continuar</button>
        </div>
    );
}

export default EnderecoCadastro;