import "./Perfil.css";
import React from "react";
import Menu from "../../componets/layout/Menu";
import NavPerfil from "../../componets/layout/navPerfil/NavPerfil";

const perfil = () => {
    return (
        <>

            <Menu />
            <main className="perfil">
                <NavPerfil />

                <div className="user-data">
                    
                </div>
            </main>

        </>
    );
}

export default perfil;