import "./cardConexoes.css";
import Usuario from "../../../media/icons/item_people_icon_stroke.svg"
import React from "react";
import TodasConexoes from "./CardTodasConexoes";
import PendenciasConexoes from "./CardPendenciasConexoes";
import SolicitacaoConexoes from "./CardSolicitacaoconexoes";

const CardConexoes = props => {
    return (
        <div className="cardUsuarioInteracao">
            <div className="avatarUsuario"><img src={Usuario} alt="" /></div>
            <div className="backgroundBlack">
                <h2>Name</h2>
                <div>
                    {
                        props.tipo === 1 ? 
                            <TodasConexoes />
                            :
                        props.tipo === 2 ?
                            <SolicitacaoConexoes />
                            :
                            <PendenciasConexoes />
                    }
                </div>
            </div>
        </div>
    );
}

export default CardConexoes;