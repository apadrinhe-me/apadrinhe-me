import "./MapaCarreira.css";
import React, {useState} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import {Link} from "react-router-dom";
import Timeline from "./Timeline";

const MapaCarreira = props => {
    const goals = [
        {
            nome: "Goal 1",
            year: 2015,
            status: "achieved",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 3",
            year: 2017,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 4",
            year: 2018,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 5",
            year: 2019,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 6",
            year: 2020,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 7",
            year: 2021,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 8",
            year: 2022,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 9",
            year: 2023,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 10",
            year: 2024,
            status: "final-goal",
            selected: false
        }
    ]

    return(
        <div className="MapaCarreira">
            <div className="div-edit">
                <Link to="/perfil/mapacarreira/editor"><button className="btn-edit-mapa"><i className="bi bi-pencil-square"></i> Editar mapa de carreira</button></Link>
            </div>

            <div className="div-timeline">
                <Timeline goals={goals}/>
            </div>
        </div>
    );
}

export default MapaCarreira;