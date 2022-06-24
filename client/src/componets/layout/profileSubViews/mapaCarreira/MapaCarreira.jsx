import "./MapaCarreira.css";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from "react-router-dom";
import Timeline from "./Timeline";

const MapaCarreira = props => {
    //Objeto para as metas de exemplo
    const goals = [
        {
            id: 1,
            typo: "acadêmica",
            name: "Completar o Ensino Médio",
            yearBegin: 2015,
            yearEnd: 2017,
            area: 'Ensino médio',
            local: 'ETEC',
            description: 'Completei o ensino médio. Me graduei com nota máxima',
            status: 'achieved',
            finalObjective: false,
            select: false
        },
        {
            id: 2,
            typo: "acadêmica",
            name: "Estudar para o enem",
            yearBegin: 2017,
            yearEnd: null,
            area: 'Ensino médio',
            local: 'São Judas',
            description: 'Tirei 750 de média',
            status: 'achieved',
            finalObjective: false,
            select: false
        },
        {
            id: 3,
            typo: "acadêmica",
            name: "ingressar em uma faculdade pública",
            yearBegin: 2018,
            yearEnd: null,
            area: 'Tecnologia',
            local: 'USP',
            description: 'Passei na USP',
            status: 'achieved',
            finalObjective: false,
            select: true
        },
        {
            id: 4,
            typo: "profissional",
            name: "Conseguir um estágio",
            yearBegin: 2019,
            yearEnd: null,
            area: 'Tecnologia',
            local: 'Oracle',
            description: 'Quero conseguir um estágio na oracle',
            status: 'in-progress',
            finalObjective: false,
            select: false
        },
        {
            id: 5,
            typo: "intercâmbio",
            name: "Fazer intercâmbio no Canada",
            yearBegin: 2020,
            yearEnd: 2022,
            area: 'Língua estrangeira',
            local: 'ILAC – International Language Academy of Canada',
            description: 'Fazer intercâmbio no Canada',
            status: 'not-achieved',
            finalObjective: false,
            select: false
        },
        {
            id: 6,
            typo: "profissional",
            name: "Ser PO",
            yearBegin: 2026,
            area: 'Tenologia',
            local: 'Oracle',
            description: 'Quero ser PO da oracle',
            status: 'not-achieved',
            finalObjective: true,
            select: false
        }
    ]

    return (
        <div className="MapaCarreira">
            <div className="div-edit">
                <Link to="/perfil/mapacarreira/editor"><button className="btn-edit-mapa"><i className="bi bi-pencil-square"></i> Editar mapa de carreira</button></Link>
            </div>

            <Timeline goals={goals} />
        </div>
    );
}

export default MapaCarreira;