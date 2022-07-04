import React from "react";
import "./SelectTypeUser.css";
import { Link } from "react-router-dom";

const SelectTypeUser = props => {

    return (
        <div className="SelectTypeUser">
            <h2>Cadastro</h2>
            <div className="cad_msg">
                <span>Bem vindo à nossa plataforma. Ficamos felizes de você fazer parte de nossa comunidade!</span>
                <span>Para começar, qual seu objetivo na plataforma?</span>
            </div>


            <div className="cards_cadastro">
                {props.children}
            </div>

            <div className="footer_cadastro">
                <Link className="have-login" to="/login">Já possuo conta</Link>  <button className="continue-cad-btn" onClick={() => props.proximaEtapa(0)}>Continuar</button>
            </div>
        </div>
    )
}
export default SelectTypeUser;