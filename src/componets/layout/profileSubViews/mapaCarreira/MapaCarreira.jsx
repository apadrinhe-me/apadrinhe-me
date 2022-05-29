import "./MapaCarreira.css";
import React, {useState} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import school_fill from "../../../../media/icons/item_school_icon_fill.svg";
import school_colored from "../../../../media/icons/item_school_icon_colored.svg";
import star from "../../../../media/icons/item_star_icon_fill.svg";

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

    const[currentGoal, setCurrentGoal] = useState(3);
    goals[currentGoal].selected = true

    function changeCurrentGoal(goal){
        setCurrentGoal(goal);

        goals.forEach(goal => {
            goal.selected = false;
        })

        goals[goal].selected = true;
    }

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
                                    <div className={goal.selected ? "timeline-goal achieved selected" : "timeline-goal achieved"} key={key} id={"timeline-goal"+key} onClick={() => changeCurrentGoal(key)}>
                                        <i className="bi bi-check-lg"></i>
                                    </div>
                                );
                            } else if (goal.status === "in-progress"){
                                return(
                                    <div className={goal.selected ? "timeline-goal in-progress selected" : "timeline-goal in-progress"} key={key} id={"timeline-goal"+key} onClick={() => changeCurrentGoal(key)}>
                                        <i className="bi bi-graph-up-arrow"></i>
                                    </div>
                                );
                            } else if (goal.status === "not-achieved"){
                                return(
                                    <div className={goal.selected ? "timeline-goal not-achieved selected" : "timeline-goal not-achieved"} key={key} id={"timeline-goal"+key} onClick={() => changeCurrentGoal(key)}>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                );
                            } else {
                                return(
                                    <div className={goal.selected ? "timeline-goal final-goal selected" : "timeline-goal final-goal"} key={key} id={"timeline-goal"+key} onClick={() => changeCurrentGoal(key)}>
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
            <div className="current-goal-title">
                <h1>{goals[currentGoal].nome}</h1>
                <span>{goals[currentGoal].status === "achieved" ? "Já concluído" : goals[currentGoal].status === "in-progress" ? "Em andamento" : "Ainda não iniciado"}</span>
            </div>

            <div className="current-goal-details">
                <div> <strong>Instituição:</strong> <span>FIAP</span> </div>
                <div> <strong>Vestibular:</strong> <span>FIAP</span> </div>
                <div> <strong>Matrícula:</strong> <span>FIAP</span> </div>
                <div className="mt-10"> <strong>Detalhes:</strong> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem dolores eaque esse expedita in maiores necessitatibus neque quam quis sunt tempore, voluptate voluptatem! Aspernatur autem expedita hic magni voluptatum.</span> </div>
            </div>
        </div>
    );
}

export default MapaCarreira;