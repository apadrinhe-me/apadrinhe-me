import React from "react";
import "./ParentInfo.css"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CreateLogin = props => {

    return (
        <div className="ParentInfo">
            <div className="return-previous-step">
                <button className="btn-format btn-return" onClick={() => props.setCadEtapa(2)}><i className="bi bi-arrow-return-left"></i> Voltar para etapa {props.cadEtapa}</button>
            </div>
            <div className="cad_msg">
                <span>Estamos quase lá!</span>
                <span>Agora precisamos ds informações de seu responsável</span>
            </div>
            <div className="personal-info-form">
                <Grid container direction="row" spacing={3}>
                    <Grid item container direction="column" spacing={2} flex={1}>
                        <Grid item><TextField id="nome-resp-login" label="Nome do responsável" variant="outlined" fullWidth required value={props.parente_nome} onChange={e => props.setParente_nome(e.target.value)}/></Grid>
                        <Grid item><TextField id="cpf-resp-login" label="CPF do responsável" placeholder="Apelido como será chamado na plataforma" variant="outlined" fullWidth required value={props.parente_cpf} onChange={e => props.setParente_cpf(e.target.value)}/></Grid>
                    </Grid>

                    <Grid item container direction="column" spacing={2} flex={1}>
                        <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Data de nascimento do responsável"
                                    views={['day', 'month', 'year']}
                                    inputFormat="dd/mm/yyyy"
                                    value={props.parente_dataNasc}
                                    onChange={newValue => props.setParente_dataNasc(newValue)}
                                    renderInput={(params) => <TextField fullWidth variant="outlined" required {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item><TextField id="email-resp-login" label="Email do responsável" placeholder="exemplo@email.com" variant="outlined" fullWidth required value={props.parente_email} onChange={e => props.setParente_email(e.target.value)}/></Grid>
                    </Grid>
                </Grid>
            </div>
            <button className="continue-cad-btn" onClick={() => props.proximaEtapa(3)}>Continuar</button>
        </div>
    )
}
export default CreateLogin