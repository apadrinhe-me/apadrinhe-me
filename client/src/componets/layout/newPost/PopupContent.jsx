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
                    <option value="somenteeu">Seguidores</option>
                    <option value="somente seguidores">Privado</option>
                </select>
            </div>
            <textarea></textarea>
            <input id="novacapa" type="file" />
            <label className="adcionarfoto" htmlFor="novacapa">Adicionar foto</label>

            <input id="novacapa" type="file" />
            <label className="adcionarfoto" htmlFor="novacapa">Novo moments</label>

            <div className="buttons">
                <button className="recomendacao">Recomendação</button>
                <button className="doacaorapida">Apadrinhamento Financeiro</button>
                <button className="doacaodebens">Apadrinhamento Material</button>
                <button className="apadrinhamento">Apadrinhamento Educacional</button>
            </div>
            <button className="publicar">Publicar</button>
        </div >
    );
}

export default PopupContent;