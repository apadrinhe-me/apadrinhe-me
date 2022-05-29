import "./MapaCarreira.css";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import school_fill from "../../../../media/icons/item_school_icon_fill.svg";
import school_colored from "../../../../media/icons/item_school_icon_colored.svg";
import star from "../../../../media/icons/item_star_icon_fill.svg";

const MapaCarreira = props => {
    const goals = [
        {
            year: 2015,
            status: "achieved",
            selected: false
        },
        {
            year: 2016,
            status: "in-progress",
            selected: true
        },
        {
            year: 2017,
            status: "not-achieved",
            selected: false
        },
        {
            year: 2018,
            status: "not-achieved",
            selected: false
        },
        {
            year: 2019,
            status: "not-achieved",
            selected: false
        },
        {
            year: 2020,
            status: "not-achieved",
            selected: false
        },
        {
            year: 2021,
            status: "not-achieved",
            selected: false
        },
        {
            year: 2022,
            status: "not-achieved",
            selected: false
        },
        {
            year: 2023,
            status: "not-achieved",
            selected: false
        },
        {
            year: 2024,
            status: "final-goal",
            selected: false
        }
    ]

    function goNextYear(){
        document.querySelector(`.timeline-goal.final-goal`).scrollIntoView({behavior: "smooth"});
    }

    function goPrevYear(){
        document.querySelector(`#timeline-goal1`).scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className="MapaCarreira">
            <div className="div-edit">
                <button className="btn-edit-mapa"><i className="bi bi-pencil-square"></i> Editar mapa de carreira</button>
            </div>
            <div className="timeline-scroll">
                <div className="div-prev">
                    <button onClick={() => goPrevYear()}>
                        <i className="bi bi-arrow-left-circle-fill"></i>
                    </button>
                </div>
                <div className="timeline-container my-scrollbar">
                    <div className="education-icons">
                        {goals.map((goal, key) => {
                            if (goal.status === "achieved"){
                                return (
                                    <div className="timeline-icon achieved" key={key}>
                                        <img src={school_fill} alt="ícone de chapéu da beca" className="div-icon"/>
                                        <div className="div-year">
                                            <span>{goal.year}</span>
                                        </div>
                                    </div>
                                );
                            } else if (goal.status === "in-progress"){
                                return(
                                    <div className="timeline-icon in-progress" key={key}>
                                        <img src={school_colored} alt="ícone de chapéu da beca" className="div-icon"/>
                                        <div className="div-year">
                                            <span>{goal.year}</span>
                                        </div>
                                    </div>
                                );
                            } else if (goal.status === "not-achieved"){
                                return(
                                    <div className="timeline-icon achieved" key={key}>
                                        <img src={school_fill} alt="ícone de chapéu da beca" className="div-icon"/>
                                        <div className="div-year">
                                            <span>{goal.year}</span>
                                        </div>
                                    </div>
                                );
                            } else {
                                return(
                                    <div className="timeline-icon final-goal" key={key}>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="timeline">

                        {goals.map((goal, key) => {
                            if (goal.status === "achieved"){
                                return (
                                    <div className={goal.selected ? "timeline-goal achieved selected" : "timeline-goal achieved"} key={key} id={"timeline-goal"+key}>
                                        <i className="bi bi-check-lg"></i>
                                    </div>
                                );
                            } else if (goal.status === "in-progress"){
                                return(
                                    <div className={goal.selected ? "timeline-goal in-progress selected" : "timeline-goal in-progress"} key={key} id={"timeline-goal"+key}>
                                        <i className="bi bi-graph-up-arrow"></i>
                                    </div>
                                );
                            } else if (goal.status === "not-achieved"){
                                return(
                                    <div className={goal.selected ? "timeline-goal not-achieved selected" : "timeline-goal not-achieved"} key={key} id={"timeline-goal"+key}>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                );
                            } else {
                                return(
                                    <div className={goal.selected ? "timeline-goal final-goal selected" : "timeline-goal final-goal"} key={key} id={"timeline-goal"+key}>
                                        <span>{goal.year}</span>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="div-next">
                    <button onClick={() => goNextYear()}>
                        <i className="bi bi-arrow-right-circle-fill"></i>
                    </button>
                </div>
            </div>
            <div className="current-goal border">
                a
            </div>
        </div>
    );
}

export default MapaCarreira;