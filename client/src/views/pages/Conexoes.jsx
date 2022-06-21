
import "./Conexoes.css";
import React, { useState } from "react";

import Menu from "../../componets/layout/Menu";
import CardConexoes from "../../componets/layout/cardsConexoes/CardConexoes";
import MenuMobile from "../../componets/layout/MenuMobile";
import If from "../../componets/funcional/If";

const todasConec = [
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
];

const conecPendentes = [
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web", msg: "Gostei do seu conteúdo. Vamos conversar!"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web", msg: "Gostei do seu conteúdo. Vamos conversar!"}
];

const conecSolicitadas = [
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"},
    {foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web"}
];

const Conexoes = () => {
    const[tipoConexao, setTipoConexao] = useState(1)
    /**
     * 1 - todas conexões
     * 2 - Conexões pendentes
     * 3 - Conexões solicitadas
     */

    return (
        <>
            <Menu className={false} />
            <div className="cardestrutura">
                <div className="Conexoes">
                    <ul className="navegacaoConexoes">
                        <li><button onClick={() => setTipoConexao(1)}>Todas as conexões</button></li>
                        <li><button onClick={() => setTipoConexao(2)}>Solicitações</button></li>
                        <li><button onClick={() => setTipoConexao(3)}>Pedentes</button></li>
                    </ul>
                </div>

                <div className="cardInteracaoUsuarios my-scrollbar">
                    <If test={tipoConexao == 1}>
                        {todasConec.map((conec, key) => {
                            return(
                                <CardConexoes
                                    tipo={1}
                                    foto={conec.foto}
                                    nome={conec.nome}
                                    aspiracao={conec.aspiracao}
                                    key={key}
                                />
                            );
                        })}
                    </If>

                    <If test={tipoConexao == 2}>
                        {conecPendentes.map((conec, key) => {
                            return(
                                <CardConexoes
                                    tipo={2}
                                    foto={conec.foto}
                                    nome={conec.nome}
                                    aspiracao={conec.aspiracao}
                                    msg={conec.msg}
                                    key={key}
                                />
                            );
                        })}
                    </If>

                    <If test={tipoConexao == 3}>
                        {conecSolicitadas.map((conec, key) => {
                            return(
                                <CardConexoes
                                    tipo={3}
                                    foto={conec.foto}
                                    nome={conec.nome}
                                    aspiracao={conec.aspiracao}
                                    key={key}
                                />
                            );
                        })}
                    </If>
                </div>
            </div>

            <MenuMobile logged={false} />
        </>
    );
}

export default Conexoes;
