import "./sobrePerfil.css";
import React, { useState } from "react";
import iconeSchool from "../../../../media/icons/item_school_icon_fill.svg"

const SobrePerfil = props => {
    return (
        <div className="sobrePerfil">
            <div>
                <h2>Sobre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat dicta reiciendis
                    est dolorum laboriosam debitis enim natus, laborum incidunt nulla ad sapiente deleniti
                    quo! In quidem ad iusto saepe.</p>
            </div>

            <div>
                <h2>currículo</h2>
                <ul>
                    <li>
                        <img className="iconeCurriculo" src={iconeSchool} alt="icone" />
                        <p>Estudante de programação web java no instituto Proa em 2022</p>
                    </li>

                    <li>
                        <img className="iconeCurriculo" src={iconeSchool} alt="icone" />
                        <p>Estudante de programação web java no instituto Proa em 2022</p>
                    </li>

                    <li>
                        <img className="iconeCurriculo" src={iconeSchool} alt="icone" />
                        <p>Estudante de programação web java no instituto Proa em 2022</p>
                    </li>

                    <li>
                        <img className="iconeCurriculo" src={iconeSchool} alt="icone" />
                        <p>Estudante de programação web java no instituto Proa em 2022</p>
                    </li>
                    <li>
                        <img className="iconeCurriculo" src={iconeSchool} alt="icone" />
                        <p>Estudante de programação web java no instituto Proa em 2022</p>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default SobrePerfil