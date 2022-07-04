import React from "react";
import "./PersonalInfo.css"
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const PersonalInfo = props => {

    return (
        <div className="PersonalInfo">
            <div className="return-previous-step">
                <button className="btn-format btn-return" onClick={() => props.setCadEtapa(1)}><i className="bi bi-arrow-return-left"></i> Voltar para etapa {props.cadEtapa}</button>
            </div>
            <div className="cad_msg">
                <span>Muito bem! Agora precisamos te conheçer melhor.</span>
                <span>Não se preocupe. Suas informações estão seguras com a gente</span>
            </div>
            <div className="personal-info-form">
                <Grid container direction="row" spacing={3}>
                    <Grid item container direction="column" spacing={2} flex={1}>
                        <Grid item><TextField id="nome-login" label="Nome completo" variant="outlined" fullWidth required value={props.nomeCompleto} onChange={e => props.setNomeCompleto(e.target.value)} /></Grid>
                        <Grid item><TextField id="nick-login" label="Nickname" placeholder="Apelido como será chamado na plataforma" variant="outlined" fullWidth required value={props.nickname} onChange={e => props.setNickname(e.target.value)} /></Grid>
                        <Grid item><TextField id="cpf-login" label="CPF" placeholder="Apenas números" variant="outlined" fullWidth required value={props.cpf} onChange={e => props.setCpf(e.target.value)} /></Grid>
                    </Grid>

                    <Grid item container direction="column" spacing={2} flex={1}>
                        <Grid item>
                            <DesktopDatePicker
                                label="Data de nascimento"
                                views={['day', 'month', 'year']}
                                inputFormat="dd/MM/yyyy"
                                value={props.dataNasc}
                                onChange={newValue => props.setDataNasc(newValue)}
                                renderInput={(params) => <TextField fullWidth variant="outlined" required {...params} />}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" className="form-control" fullWidth>
                                <InputLabel id="tipo_meta" required>Gênero</InputLabel>
                                <Select
                                    labelId="tipo_meta"
                                    id="tipo_meta"
                                    value={props.genero}
                                    onChange={e => props.setGenero(e.target.value)}
                                    label="Gênero"
                                    required
                                >
                                    <MenuItem value={"M"}>Masculino</MenuItem>
                                    <MenuItem value={"F"}>Feminino</MenuItem>
                                    <MenuItem value={"T"}>Transgênero</MenuItem>
                                    <MenuItem value={"0"}>Prefiro não identificar</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <TextField id="renda" label="Renda familiar mensal" placeholder="Ex.: R$3000" variant="outlined" fullWidth required value={props.renda} onChange={e => props.setRenda(e.target.value)} />
                        </Grid>

                        {
                            props.selectedPadrinType == "ser_apadrinhado" ?
                                <Grid item>
                                    <FormControl variant="outlined" className="form-control" fullWidth>
                                        <InputLabel id="tipo_meta" required>Escolaridade</InputLabel>
                                        <Select
                                            labelId="escolaridade"
                                            id="escolaridade"
                                            value={props.escola}
                                            onChange={e => props.setEscola(e.target.value)}
                                            label="Escolaridade"
                                            required
                                        >
                                            <MenuItem value={"publica"}>Estudei majoritariamente em escola pública</MenuItem>
                                            <MenuItem value={"particular"}>Estudei majoritariamente em escola particular</MenuItem>
                                            <MenuItem value={"nenhum"}>Atualmente não estou matriculado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                :
                                ""
                        }

                    </Grid>
                </Grid>
            </div>
            <button className="continue-cad-btn" onClick={() => props.proximaEtapa(2)}>Continuar</button>
        </div>
    )
}
export default PersonalInfo