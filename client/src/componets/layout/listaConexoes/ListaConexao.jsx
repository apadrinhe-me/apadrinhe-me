import "./ListaConexao.css";
import React, { useState } from "react";
import perfilwag from "../../../media/profile_pictures/wagner.png"
import Button from "@mui/material/Button"
import If from "../../funcional/If";
import ProfPicture from "../profPicture/ProfPicture";

const ListaConexao = props => {
    return (
        <div className="card_conexoes">
            <ProfPicture src={props.foto} scale={50} />
            <div className="text_cardconexoes"><h4>{props.nome}</h4>
                <p>{props.aspiracao}</p></div>
            <If test={props.tipoConexao === 1 || props.tipoConexao === 3}>
                <Button sx={{ marginLeft: "auto" }}>Ver Perfil</Button>
            </If>

            <If test={props.tipoConexao === 2}>
                <div className="margin-leftbuttons">
                    <Button sx={{ color: "green" }}><i className="bi bi-check-lg"></i></Button>
                    <Button sx={{ color: "red" }}><i className="bi bi-x-lg"></i></Button>
                </div>
            </If>
        </div >

    );
}

export default ListaConexao;