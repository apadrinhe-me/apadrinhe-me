import "./Card_cadastro.css";
import React, {useRef} from "react";
import chapeu from "../../../media/Imagens_pop-up/icon_cadastro-09.svg";
import foguete from "../../../media/Imagens_pop-up/icon_cadastro-10.svg";

const Card_cadastro = props => {
    return (
        <label className={props.type === props.selectedPadrinType ? "Card_cadastro selecionado" : "Card_cadastro"}>
            <input type="radio" name="check_card" className="check_card" value={props.type} onChange={() => props.setSelectedPadrinType(props.type)} checked={props.type === props.selectedPadrinType}/>
            <img className="chapeu" src={props.type === "ser_apadrinhado" ? chapeu : foguete} height="100px" />
            <div>{props.children}</div>
        </label>
    );
}
export default Card_cadastro;