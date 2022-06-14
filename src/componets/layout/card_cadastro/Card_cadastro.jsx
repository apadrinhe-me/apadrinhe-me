import "./Card_cadastro.css";
import React from "react";
import chapeu from "../../../media/Imagens_pop-up/icon_cadastro-09.svg";
import foguete from "../../../media/Imagens_pop-up/icon_cadastro-10.svg";

const Card_cadastro = React.forwardRef((props, ref) => {
    return (
        <div className="Card_cadastro" ref={ref}>
            <img className="chapeu" src={props.type === "ser_apadrinhado" ? chapeu : foguete} height="100px" />
            <div>{props.children}</div>

        </div>
    );
}
);
export default Card_cadastro;