import "./cardConexoes.css";
import Usuario from "../../../media/profile_pictures/natan_proa.jpg"
import React from "react";
import TodasConexoes from "./CardTodasConexoes";
import PendenciasConexoes from "./CardPendenciasConexoes";
import SolicitacaoConexoes from "./CardSolicitacaoconexoes";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ProfPicture from "../profPicture/ProfPicture";
import Typography from '@mui/material/Typography';

const CardConexoes = props => {
    return (
        <Card sx={{ maxWidth: 250, display: "flex", flexDirection: "column" }}>
            <CardHeader sx={{display: "flex", gap: "10px"}}
                avatar={<ProfPicture src={props.foto} scale={50}/>}
                title={<Typography variant="subtitle2" sx={{fontSize: "15px", fontWeight: 600}}>{props.nome}</Typography>}
                subheader={<Typography variant="subtitle2" sx={{fontSize: "13px", color: "#ababab"}}>{props.aspiracao}</Typography>}
            />

            <CardContent>
                <div>
                    {
                        props.tipo === 1 ?
                        <Typography variant="body2">É a sua conexão</Typography>
                        :
                        props.tipo === 2 ?
                        <>
                            <Typography variant="body2">Gostaria de se conectar</Typography>
                            <Typography variant="body2" sx={{fontSize: "14px", color: "#d9d9d9"}}>{props.msg}</Typography>
                        </>
                        :
                        <Typography variant="body2">Recebeu sua solicitação de conexão</Typography>
                    }
                </div>
            </CardContent>
            <CardActions>
                {
                    props.tipo === 1 ?
                        <Button>Ver perfil</Button>
                        :
                        props.tipo === 2 ?
                        <>
                            <Button color="success">Aceitar</Button>
                            <Button color="error">Recusar</Button>
                        </>
                        :
                            <Button>Ver perfil</Button>
                }
            </CardActions>
        </Card>
    );
}

export default CardConexoes;