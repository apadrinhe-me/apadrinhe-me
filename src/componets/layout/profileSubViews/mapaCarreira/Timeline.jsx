import React, {useState} from "react";
import "./Timeline.css";
import school_fill from "../../../../media/icons/item_school_icon_fill.svg";
import school_colored from "../../../../media/icons/item_school_icon_colored.svg";
import star from "../../../../media/icons/item_star_icon_fill.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

const Timeline = props => {

    const[currentGoal, setCurrentGoal] = useState(0);
    props.goals[currentGoal].selected = true

    function changeCurrentGoal(goal){
        setCurrentGoal(goal);

        props.goals.forEach(goal => {
            goal.selected = false;
        })

        props.goals[goal].selected = true;
    }

    function goNextYear(){
        document.querySelector(`.timeline-goal.final-goal`).scrollIntoView({behavior: "smooth"});
    }

    function goPrevYear(){
        document.querySelector(`#timeline-goal1`).scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className="Timeline">
            <div className="timeline-scroll">
                <div className="div-prev">
                    <button onClick={() => goPrevYear()}><i className="bi bi-arrow-left-circle-fill"></i></button>
                </div>
                <div className="timeline-container my-scrollbar">
                    <div className="education-icons">
                        {props.goals.map((goal, key) => {
                            if(goal.finalObjective) {
                                return(
                                    <div className="timeline-icon final-goal" key={key}>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                );
                            } else if (goal.status === "achieved"){
                                return (
                                    <div className="timeline-icon achieved" key={key}>
                                        <img src={school_fill} alt="ícone de chapéu da beca" className="div-icon"/>
                                        <div className="div-year">
                                            <span>{goal.yearBegin}</span>
                                        </div>
                                    </div>
                                );
                            } else if (goal.status === "in-progress"){
                                return(
                                    <div className="timeline-icon in-progress" key={key}>
                                        <img src={school_colored} alt="ícone de chapéu da beca" className="div-icon"/>
                                        <div className="div-year">
                                            <span>{goal.yearBegin}</span>
                                        </div>
                                    </div>
                                );
                            } else if (goal.status === "not-achieved"){
                                return(
                                    <div className="timeline-icon achieved" key={key}>
                                        <img src={school_fill} alt="ícone de chapéu da beca" className="div-icon"/>
                                        <div className="div-year">
                                            <span>{goal.yearBegin}</span>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="timeline">

                        {props.goals.map((goal, key) => {
                            if(goal.finalObjective) {
                                return(
                                    <div className={goal.selected ? "timeline-goal final-goal selected" : "timeline-goal final-goal"} key={key} id={"timeline-goal"+key} onClick={() => changeCurrentGoal(key)}>
                                        <span>{goal.yearBegin}</span>
                                    </div>
                                );
                            } else if (goal.status === "achieved"){
                                return (
                                    <div className={goal.selected ? "timeline-goal achieved selected" : "timeline-goal achieved"} key={key} id={"timeline-goal"+key} onClick={() => changeCurrentGoal(key)}>
                                        <i className="bi bi-check-lg"></i>
                                    </div>
                                );
                            } else if (goal.status === "in-progress"){
                                return(
                                    <div className={goal.selected ? "timeline-goal in-progress selected" : "timeline-goal in-progress"} key={key} id={"timeline-goal"+key} onClick={() => changeCurrentGoal(key)}>
                                        <i className="bi bi-circle-fill"></i>
                                    </div>
                                );
                            } else if (goal.status === "not-achieved"){
                                return(
                                    <div className={goal.selected ? "timeline-goal not-achieved selected" : "timeline-goal not-achieved"} key={key} id={"timeline-goal"+key} onClick={() => changeCurrentGoal(key)}>
                                        <i className="bi bi-star-fill"></i>
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
            <div className="goal-info">
                <div className="current-goal-title">
                    <h1>{props.goals[currentGoal].name}</h1>
                    <span>{props.goals[currentGoal].status === "achieved" ? "Já concluído" : props.goals[currentGoal].status === "in-progress" ? "Em andamento" : "Ainda não iniciado"}</span>
                </div>

                <div className="current-goal-details">
                    <div> <strong>Instituição/empresa/plataforma:</strong> <span>{props.goals[currentGoal].local}</span> </div>
                    <div> <strong>Data de início:</strong> <span>{props.goals[currentGoal].yearBegin}</span> </div>
                    <div> <strong>Data de fim:</strong> <span>{props.goals[currentGoal].yearBegin}</span> </div>
                    <div> <strong>Área de conhecimento:</strong> <span>{props.goals[currentGoal].area}</span> </div>
                    <div> <strong>Dexcrição:</strong> <span>{props.goals[currentGoal].description}</span> </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;