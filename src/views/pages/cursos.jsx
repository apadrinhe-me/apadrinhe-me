import "./cursos.css";
import React from "react";
import Menu from "../../componets/layout/Menu";

const cursos =  () => {
    return(
        <>
            <Menu />
            <div className="cursos">
                <h1>Cursos</h1>
            </div>
        </>
    );
}

export default cursos;