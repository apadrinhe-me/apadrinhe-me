import "./HistoricoPad.css";
import React from "react";
import Ajuda from "./ajuda/Ajuda";

const HistoricoPad = props => {
    return (
        <div className="HistoricoPad">
            <h2>Histórico de ajudas</h2>
            <div className="ajudas my-scrollbar">
                <Ajuda
                    tipo="recomendacao"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="apadrinhamento"
                    padrinho="Gabriel"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="recomendacao"
                    padrinho="Wagner"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="recomendacao"
                    padrinho="Aurora"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="doacao_dinheiro"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="recomendacao"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="recomendacao"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="recomendacao"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="doacao_material"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="recomendacao"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="recomendacao"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />

                <Ajuda
                    tipo="doacao_material"
                    padrinho="Natan"
                    afiliado="Valentina"
                    data="2022-07-06 19:19"
                    curso="Programação web para iniciantes"
                />
            </div>
        </div>
    );
}

export default HistoricoPad;