import "./Ajuda.css";
import React from "react";
import ProfPicture from "../../../profPicture/ProfPicture";
import If from "../../../../funcional/If";
import GetPostDate from "../../../../funcional/getPostDate";

const Ajuda = props => {
    return (
        <div className="Ajuda">
            <div className="picture-to-picture">
                <ProfPicture src="natan_proa.jpg" scale={40} />
                <i className="bi bi-arrow-right"></i>
                <ProfPicture src="valentina.png" scale={40} />
            </div>
            <div className="ajuda-descricao">
                <div className="descricao">
                    <If test={props.tipo === "recomendacao"}>
                        <span><strong>{props.padrinho}</strong> recomendo o curso <strong>{props.curso}</strong> para <strong>{props.afiliado}</strong></span>
                    </If>

                    <If test={props.tipo === "doacao_dinheiro"}>
                        <span><strong>{props.padrinho}</strong> doou R$100 <strong>{props.dinheiro}</strong> para <strong>{props.afiliado}</strong></span>
                    </If>

                    <If test={props.tipo === "doacao_material"}>
                        <span><strong>{props.padrinho}</strong> doou material <strong>{props.material}</strong> para <strong>{props.afiliado}</strong></span>
                    </If>

                    <If test={props.tipo === "apadrinhamento"}>
                        <span><strong>{props.padrinho}</strong> apadrinhou <strong>{props.afiliado}</strong></span>
                    </If>
                </div>
                <div className="data">
                    {GetPostDate(props.data)}
                </div>
            </div>
        </div>
    );
}
export default Ajuda;