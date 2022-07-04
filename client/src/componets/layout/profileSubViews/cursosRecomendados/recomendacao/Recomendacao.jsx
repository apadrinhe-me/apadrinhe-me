import "./Recomendacao.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Recomendacao = props => {
    return (
        <div className="Recomendacao">
            <div className="icone">
                <i class="bi bi-book"></i>
            </div>

            <div className="descricao">
                <strong>{props.pessoa}</strong> recomendou curso <strong>{props.curso}</strong> para você
            </div>

            <div className="redirect">
                <Button ><Link to="/cursos">Ir para o curso</Link></Button>
            </div>

        </div>
    );
}

export default Recomendacao;