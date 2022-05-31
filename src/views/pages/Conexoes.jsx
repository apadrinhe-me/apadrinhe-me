import "./conexoes.css";
import React from "react";
import Menu from "../../componets/layout/Menu";
import CardTodasConexoes from "../../componets/layout/cardsConexoes/CardTodasConexoes";

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
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    <CardTodasConexoes />
                    
                </div>
            </div>
        </>
    );
}

export default Conexoes;
