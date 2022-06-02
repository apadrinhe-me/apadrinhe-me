import "./Perfil.css";

import React, { useState } from "react";
import Menu from "../../componets/layout/Menu";
import NavPerfil from "../../componets/layout/navPerfil/NavPerfil";
import MenuMobile from "../../componets/layout/MenuMobile";
import ApadPopup from "../../componets/layout/apadPopup/ApadPopup";
import {BrowserRouter} from "react-router-dom";

const Perfil = props => {
    const[buttonPopup, setButtonPopup] = useState(false);

    if (buttonPopup){
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        document.querySelector('body').style.overflowY = 'auto';
    }

    return (
        <>
            <Menu logged={true} />
            <main className="Perfil">
                <NavPerfil profType="padrinho"
                    setButtonPopup={setButtonPopup}
                />

                <div className="profileSubView">
                    {props.children}
                </div>
            </main>

            <ApadPopup
                trigger={buttonPopup}
                setTrigger={setButtonPopup}/>

            <MenuMobile atual="Home" logged={true} />
        </>
    );
}

export default Perfil;