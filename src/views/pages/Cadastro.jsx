import "./Cadastro.css";
import React from "react";
import Logo from "../../media/logo/logoredondo-03.svg";
import estilo2 from "../../media/Imagens_pop-up/estilodir_cadastro.svg";
import estilo1 from "../../media/Imagens_pop-up/estilo2-cadastro.svg";
import chapeu from "../../media/Imagens_pop-up/icon_cadastro-09.svg";
import foguete from "../../media/Imagens_pop-up/icon_cadastro-10.svg";
import { hoursToMinutes } from "date-fns";



const Cadastro = () => {
    return (<div className="Cadastro">


        <div className="Cards">
            <div className="nav_cadastro"> <a className="voltar" href="/">voltar</a>
                <img className="logo" src={Logo} height="80px" />
                <button className="entrar">Entrar</button>

            </div>
            <div className="cardPadrinho">
                <img className="chapeu" src={chapeu} height="100px" />
                <p>Quero ser <br /> Apadrinhado(a)</p>
                <button className="botao">Cadastre-se</button>

            </div>
            <div className="cardAfiliado">
                <img className="foguete" src={foguete} height="110px" />
                <p>Quero <br /> Apadrinhar</p>
                <button className="botao">Cadastre-se</button>
            </div>
            <img className="estilo2" src={estilo2} />
            <img className="estilo1" src={estilo1} />


            {/*
            <div className="foguete2"><img className="foguetin" src="" height="250px" /></div>*/}


        </div>







    </div>
    );
}

export default Cadastro;