import "./Perfil.css";

import React, { useState } from "react";
import Menu from "../../componets/layout/Menu";
import NavPerfil from "../../componets/layout/navPerfil/NavPerfil";
import MenuMobile from "../../componets/layout/MenuMobile";
import ApadPopup from "../../componets/layout/apadPopup/ApadPopup";
import {BrowserRouter} from "react-router-dom";

const Perfil = props => {

    return (
        <>
            <Menu logged={true} />
            <main className="Perfil">
                <NavPerfil profType="padrinho" />

                <div className="profileSubView">
                    {props.children}
                </div>
            </main>

            <MenuMobile atual="Home" logged={true} />
        </>
    );
}

export default Perfil;