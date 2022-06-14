import "./Cadastro.css";
import React, { useState, useRef } from "react";
import Logo from "../../media/logo/logoredondo-03.svg";
import Card_cadastro from "../../componets/layout/card_cadastro/Card_cadastro";



const Cadastro = () => {
    const ser_apadrinhado = useRef()
    console.log(ser_apadrinhado)
    return (<div className="Cadastro">
        <div className="Cards" >
            <div className="container_cards">
                <Card_cadastro type="ser_apadrinhado" ref={ser_apadrinhado}>
                    <h3 className="title_card">Quero ser <br /> afilhado(a)</h3>
                    <p className="text_card">Crie conteúdeo para ser visto e receber ajuda de diversos apoiadores cadastrados na plataforma</p>
                </Card_cadastro>
                <Card_cadastro type="apadrinhar">
                    <h3 className="title_card">Quero <br />apoiar</h3>
                    <p className="text_card">  Acompanhe o desenvolvimento de jovens e encontre um para apoiar de diversas maneiras  </p>
                </Card_cadastro>
            </div>
        </div>

    </div>
    );
}

export default Cadastro;