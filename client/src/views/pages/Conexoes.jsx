
import "./Conexoes.css";
import React, { useState, useEffect } from "react";

import Menu from "../../componets/layout/Menu";
import ListaConexao from "../../componets/layout/listaConexoes/ListaConexao";
import MenuMobile from "../../componets/layout/MenuMobile";
import If from "../../componets/funcional/If";
import { MyServer } from "../../services/api";

let login;

const todasConec = [
    { foto: "aurora.png", nome: "Aurora seles", aspiracao: "Jornalista e Professora" },
    { foto: "gabriel.png", nome: "Gabriel Augusto", aspiracao: "Professor at Senac" },
    { foto: "cris.jpg", nome: "Cristian Ferreira", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "natan_proa.jpg", nome: "Natan Barbosa", aspiracao: "Aspirante a desenvolvedor FullStack" },
    { foto: "jailson.png", nome: "Jailson Costa", aspiracao: "Docente Full Stack Web Java no Senac São Paulo" },
    { foto: "valentina.png", nome: "Valentina", aspiracao: "Aspirante a astrônoma" },
    { foto: "lg.png", nome: "Luis Gustavo", aspiracao: "Aspirante a desenvolvedor FullStack" },
    { foto: "Ro.png", nome: "Rosani", aspiracao: "Cordenadora educacional" },
    { foto: "wagner.png", nome: "Wagner Pereira", aspiracao: "Aspirante a desenvolvedor FullStack" },
    { foto: "murilo.png", nome: "Murilo Moura", aspiracao: "Desenvolvedor Web" },
    { foto: "jg.png", nome: "José Gabriel", aspiracao: "Desenvolvedor Web" },
    { foto: "cadu.png", nome: "Carlos Eduardo", aspiracao: "Desenvolvedor Web" }
];

const conecPendentes = [
    { foto: "nicole.png", nome: "Nicolly", aspiracao: "Aspirante a desenvolvedor Fullstack", msg: "Gostei do seu conteúdo. Vamos conversar!" },
    { foto: "leo.png", nome: "Leonardo Siqueira", aspiracao: "Aspirante a desenvolvedor web", msg: "Gostei do seu conteúdo. Vamos conversar!" },
    { foto: "marques.png", nome: "Gabriel Marques", aspiracao: "Aspirante a desenvolvedor Fullstack", msg: "Gostei do seu conteúdo. Vamos conversar!" },
    { foto: "eduardo.png", nome: "Eduardo Oliveira", aspiracao: "Aspirante a desenvolvedor web", msg: "Gostei do seu conteúdo. Vamos conversar!" }
];

const conecSolicitadas = [
    { foto: "jv.png", nome: "João Victor", aspiracao: "Aspirante a desenvolvedor FullStack" },
    { foto: "diego.png", nome: "Diego Santos", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "dani.png", nome: "Dani Ferreira", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "mayara.png", nome: "Mayara Rodrigues", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "andre.png", nome: "Andre Palhares", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "larissa.png", nome: "Larissa Azevedo", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "igor.png", nome: "Igor Viana", aspiracao: "Aspirante a desenvolvedor web" },
    { foto: "waldes.png", nome: "Lucas Waldes", aspiracao: "Aspirante a desenvolvedor Fullstack" },
    { foto: "giullia.png", nome: "Giullia Maria", aspiracao: "Aspirante a desenvolvedor Fullstack" }
];

const Conexoes = () => {
    const [tipoConexao, setTipoConexao] = useState(1)
    /**
     * 1 - todas conexões
     * 2 - Conexões pendentes
     * 3 - Conexões solicitadas
     */

     const [logged, setLogged] = useState(false);

     //verificar se está logado
     useEffect(() => {
         MyServer.get("/login").then(response => {
             //Não pode logado na página de login
             if (response.data.logged) {
                 login = response.data.user;
                 setLogged(true)
             }
         })
     }, [])

    return (
        <>
            <Menu logged={logged} atual="Conexoes"/>
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

            <MenuMobile logged={false} atual="Conexoes"/>
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