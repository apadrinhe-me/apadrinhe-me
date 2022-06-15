import "./Card_cadastro.css";
import React, { useState, useEffect } from "react";
import chapeu from "../../../media/Imagens_pop-up/icon_cadastro-09.svg";
import foguete from "../../../media/Imagens_pop-up/icon_cadastro-10.svg";

const Card_cadastro = React.forwardRef((props, ref) => {
    const [tipo_card, setTipo_card] = useState(props.type)
    console.log("blablabla")
    return (
        <label className="Card_cadastro">
            <input type="radio" name="check_card" className="check_card" value={props.type} checked={tipo_card === props.type} onChange={e => {
                setTipo_card(e.target.value)

            }} />
            <img className="chapeu" src={props.type === "ser_apadrinhado" ? chapeu : foguete} height="100px" />
            <div>{props.children}</div>

        </label>
    );
}
);
export default Card_cadastro;