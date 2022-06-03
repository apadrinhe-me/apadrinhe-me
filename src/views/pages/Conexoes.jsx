
import "./Conexoes.css";
import React, { useState } from "react";

import Menu from "../../componets/layout/Menu";
import CardConexoes from "../../componets/layout/cardsConexoes/CardConexoes";

const Conexoes = () => {
    const[tipoConexao, setTipoConexao] = useState(1)
    /**
     * 1 - todas conexões
     * 2 - Conexões pendentes
     * 3 - Conexões solicitadas
     */

    return (
        <>
            <Menu />
            <div className="cardestrutura">
                <div className="Conexoes">

                    <ul className="navegacaoConexoes">
                        <li><button onClick={() => setTipoConexao(1)}>Todas as conexões</button></li>
                        <li><button onClick={() => setTipoConexao(2)}>Solicitações</button></li>
                        <li><button onClick={() => setTipoConexao(3)}>Pedentes</button></li>
                    </ul>
                </div>

                <div className="cardInteracaoUsuarios">
                    <CardConexoes tipo={tipoConexao} />
                    <CardConexoes tipo={tipoConexao} />
                    <CardConexoes tipo={tipoConexao} />
                    <CardConexoes tipo={tipoConexao} />
                    <CardConexoes tipo={tipoConexao} />
                </div>
            </div>
        </>
    );
}

export default Conexoes;
