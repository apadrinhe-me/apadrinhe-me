import React, { useState } from "react";
import "./PopupContent.css";
import valentina from "../../../media/profile_pictures/valentina.png"


const PopupContent = props => {
    return (
        <div className="PopupContent">
            <div className="topFixed"><h3>Nova Postagem</h3></div>

            <div className="secondTop">
                <img src={valentina} height={55} width={55} />

                <div className="profilename">

                    <h4>Valentina</h4>
                    <p>Aspirante a Desenvolvedor Fullstack</p>
                </div>
                <select id="who" name="estado">
                    <option value="publico"> Público </option>
                    <option value="somenteeu">Somente eu</option>
                    <option value="somente seguidores">Só seguidores</option>
                </select>
            </div>
            <textarea></textarea>
            <div className="buttons">
                <button className="recomendacao">Recomendação</button>
                <button className="doacaorapida">Doação Rápida</button>
                <button className="doacaodebens">Doação de Bens</button>
                <button className="apadrinhamento">Apadrinhamento</button>
            </div>
            <button className="publicar">Publicar</button>
        </div >
    );
}

export default PopupContent;