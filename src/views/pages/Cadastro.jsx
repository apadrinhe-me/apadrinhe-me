import "./Cadastro.css";
import React, { useState, useRef } from "react";
import Card_cadastro from "../../componets/layout/card_cadastro/Card_cadastro";
import Cadastro_jovem1 from "../../componets/layout/pagesCadastro/Cadastro_jovem1";



const Cadastro = () => {

    const ser_apadrinhado = useRef()
    const apadrinhar = useRef()
    console.log(ser_apadrinhado, apadrinhar)



    return (<div className="Cadastro">
        <div className="Cards" >
            <div className="container_cards">
                <Card_cadastro type="ser_apadrinhado" ref={ser_apadrinhado}>
                    <h3 className="title_card">Quero ser <br /> afilhado(a)</h3>
                    <p className="text_card">Crie conteúdeo para ser visto e receber ajuda de diversos apoiadores cadastrados na plataforma</p>
                </Card_cadastro>
                <Card_cadastro type="apadrinhar" ref={apadrinhar}>
                    <h3 className="title_card">Quero <br />apoiar</h3>
                    <p className="text_card">  Acompanhe o desenvolvimento de jovens e encontre um para apoiar de diversas maneiras  </p>
                </Card_cadastro>
                {/*<Cadastro_jovem1 />*/}

            </div>
        </div>

    </div>
    );
}

export default Cadastro;