import "./JovemApad.css";
import React from "react";
import Button from '@mui/material/Button';
import ProfPicture from "../../../profPicture/ProfPicture";

const JovemApad = props => {
    return(
        <div className="JovemApad">
            <div className="info-perfil">
                <ProfPicture src="natan_proa.jpg" scale={40} />
                <strong>{props.nome}</strong>
            </div>

            <div className="descricao-apad">
                Você apadrinhou o jovem <strong>{props.nome}</strong> <br />
                <strong>{props.meses}</strong> meses consecultivos <br />
                com o valor de <strong>R$ {props.doacao}</strong>
            </div>

            <div className="redirect">
                <Button >Ir para o perfil</Button>
            </div>

        </div>
    );
}

export default JovemApad;