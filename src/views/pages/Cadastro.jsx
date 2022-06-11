import "./Cadastro.css";
import React from "react";
import Logo from "../../media/logo/logoredondo-03.svg"
import Estilo2 from "../../media/Imagens_pop-up/estilodir_cadastro.svg"
import Estilo1 from "../../media/Imagens_pop-up/estiloesq_cadastro.svg"
import Chapeu from "../../media/Imagens_pop-up/icon_cadastro-09.svg"
import Foguete from "../../media/Imagens_pop-up/icon_cadastro-10.svg"
import Foguetin from "../../media/Imagens_pop-up/foguetevoando_cadastro-11.svg"


const Cadastro = () => {
    return (<div className="Cadastro">


        <div className="Cards">
            <div className="nav_cadastro"> <img className="logo" src={Logo} height="80px" />
                <button className="entrar">Entrar</button>

            </div>
            <div className="cardPadrinho">
                <img className="chapeu" src={Chapeu} height="100px" />
                <p>Quero ser <br /> Apadrinhado(a)</p>
                <button className="botao">Cadastre-se</button>

            </div>
            <div className="cardAfiliado">
                <img className="foguete" src={Foguete} height="110px" />
                <p>Quero <br /> Apadrinhar</p>
                <button className="botao">Cadastre-se</button>
            </div>
            <img className="estilo2" src={Estilo2} />
            <img className="estilo1" src={Estilo1} />


            <div className="foguete2"><img className="foguetin" src={Foguetin} height="250px" /></div>

        </div>







    </div>
    );
}

export default Cadastro;