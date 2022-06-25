
import "./Conexoes.css";
import React, { useState } from "react";

import Menu from "../../componets/layout/Menu";
import ListaConexao from "../../componets/layout/listaConexoes/ListaConexao";
import MenuMobile from "../../componets/layout/MenuMobile";
import If from "../../componets/funcional/If";

const todasConec = [
    { foto: "aurora.png", nome: "Aurora seles", aspiracao: "Jornalista e Professora" },
    { foto: "gabriel.png", nome: "Gabriel Augusto", aspiracao: "Professor at Senac" },
    { foto: "cris.jpg", nome: "Cristian Ferreira", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "jailson.png", nome: "Jailson Costa", aspiracao: "Docente Full Stack Web Java no Senac São Paulo" },
    { foto: "valentina.png", nome: "Valentina", aspiracao: "Aspirante a astrônoma" },
    { foto: "lg.png", nome: "Luis Gustavo", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "Ro.png", nome: "Rosani", aspiracao: "Cordenadora educacional" },
    { foto: "wagner.png", nome: "Wagner Pereira", aspiracao: "Aspirante a desenvolvedor web" },
];

const conecPendentes = [
    { foto: "murilo.png", nome: "murilo.png", aspiracao: "Aspirante a desenvolvedor web", msg: "Gostei do seu conteúdo. Vamos conversar!" },
    { foto: "diego.png", nome: "Diego Santos", aspiracao: "Aspirante a desenvolvedor web", msg: "Gostei do seu conteúdo. Vamos conversar!" },
    { foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web", msg: "Gostei do seu conteúdo. Vamos conversar!" },
    { foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web", msg: "Gostei do seu conteúdo. Vamos conversar!" }
];

const conecSolicitadas = [
    { foto: "jv.png", nome: "João Victor", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "diego.png", nome: "Diego Santos", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor web" }
];

const Conexoes = () => {
    const [tipoConexao, setTipoConexao] = useState(1)
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
                    <If test={tipoConexao === 1}>

                        {todasConec.map((conec, key) => {
                            return (
                                <ListaConexao tipoConexao={tipoConexao} nome={conec.nome} aspiracao={conec.aspiracao} foto={conec.foto} />
                            )
                        })}

                    </If>
                    <If test={tipoConexao === 2}>

                        {conecSolicitadas.map((conec, key) => {
                            return (
                                <ListaConexao tipoConexao={tipoConexao} nome={conec.nome} aspiracao={conec.aspiracao} foto={conec.foto} />
                            )
                        })}

                    </If>
                    <If test={tipoConexao === 3}>

                        {conecPendentes.map((conec, key) => {
                            return (
                                <ListaConexao tipoConexao={tipoConexao} nome={conec.nome} aspiracao={conec.aspiracao} foto={conec.foto} />
                            )
                        })}

                    </If>

                </div>
            </div>

            <MenuMobile logged={false} />
        </>
    );
}

export default Conexoes;

/*{<If test={tipoConexao == 1}>
                        {todasConec.map((conec, key) => {
                            return(
                                <ListaConexao/>
                            );
                        })}
                    </If>

                    <If test={tipoConexao == 2}>
                        {conecPendentes.map((conec, key) => {
                            return(
                                <ListaConexao/>
                            );
                        })}
                    </If>

                    <If test={tipoConexao == 3}>
                        {conecSolicitadas.map((conec, key) => {
                            return(
                                <ListaConexao/>
                            );
                        })}
                    </If>}*/