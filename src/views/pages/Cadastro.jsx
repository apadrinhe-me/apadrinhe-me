import "./Cadastro.css";
import React from "react";
import Estilo2 from "../../media/Imagens_pop-up/estilodir_cadastro.svg"
import Estilo1 from "../../media/Imagens_pop-up/estiloesq_cadastro.svg"

const Cadastro = () => {
    return (<div className="Cadastro">


        <div className="Cards">
            <div className="cardPadrinho"></div>
            <div className="cardAfiliado"></div>
            <img className="estilo2" src={Estilo2} />
            <img className="estilo1" src={Estilo1} />

        </div><div className="estiloesq"></div>








    </div>
    );
}

export default Cadastro;