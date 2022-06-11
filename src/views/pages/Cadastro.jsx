import "./Cadastro.css";
import React from "react";
import Logo from "../../media/logo/logoredondo-03.svg";


const Cadastro = () => {
    return (<div className="Cadastro">


        <div className="Cards">
            <div className="nav_cadastro"> <img className="logo" src="" height="80px" />
                <button className="entrar">Entrar</button>

            </div>
            <div className="cardPadrinho">
                <img className="chapeu" src="" height="100px" />
                <p>Quero ser <br /> Apadrinhado(a)</p>
                <button className="botao">Cadastre-se</button>

            </div>
            <div className="cardAfiliado">
                <img className="foguete" src="" height="110px" />
                <p>Quero <br /> Apadrinhar</p>
                <button className="botao">Cadastre-se</button>
            </div>
            <img className="estilo2" src="" />
            <img className="estilo1" src="" />


            <div className="foguete2"><img className="foguetin" src="" height="250px" /></div>

        </div>







    </div>
    );
}

export default Cadastro;