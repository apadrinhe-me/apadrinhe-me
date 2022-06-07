import "./ListaJovensApad.css";
import React from "react";
import JovemApad from "./jovemApad/JovemApad";

const ListaJovensApad = props => {
    return(
        <div className="ListaJovensApad">
            <h2>Lista de jovens apadrinhados</h2>
            <div className="lista">
                <JovemApad 
                    nome="Natan"
                    meses={2}
                    doacao={100}
                />

                <JovemApad 
                    nome="Natan"
                    meses={2}
                    doacao={100}
                />
            </div>
        </div>
    );
}

export default ListaJovensApad;