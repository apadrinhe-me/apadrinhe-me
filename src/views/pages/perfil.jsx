import "./perfil.css";
import React from "react";
import Menu from "../../componets/layout/Menu";
import NavPerfil from "../../componets/layout/navPerfil/NavPerfil";


const perfil = () => {
    return (
        <>

            <Menu />
            <main className="perfil">
                <NavPerfil />


                
            </main>

        </>
    );
}

export default perfil;