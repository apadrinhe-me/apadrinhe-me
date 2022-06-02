import "./Conexoes.css";
import React from "react";
import Menu from "../../componets/layout/Menu";
import CardConexoes from "../../componets/layout/cardsConexoes/CardConexoes";

const Conexoes = () => {
    return (
        <>
            <Menu />
            <div className="cardestrutura">
                <div className="Conexoes">

                    <ul className="navegacaoConexoes">
                        <li><button><p>Todas as Conecções</p></button></li>
                        <li><button>Solicitações</button></li>
                        <li><button>Pedentes</button></li>
                    </ul>
                </div>

                <div className="cardInteracaoUsuarios">
                    <CardConexoes />
                    <CardConexoes />
                    <CardConexoes />
                    <CardConexoes />
                    <CardConexoes />
                   
                </div>
            </div>
        </>
    );
}

export default Conexoes;
