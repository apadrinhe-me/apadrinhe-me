import "./Perfil.css";

import React, { useState } from "react";
import Menu from "../../componets/layout/Menu";
import NavPerfil from "../../componets/layout/navPerfil/NavPerfil";
import MenuMobile from "../../componets/layout/MenuMobile";
import ApadPopup from "../../componets/layout/apadPopup/ApadPopup";
import ProfileContent from "../../componets/layout/profileSubViews/ProfileContent";
import {BrowserRouter} from "react-router-dom";

const Perfil = () => {
    const[buttonPopup, setButtonPopup] = useState(false);

    if (buttonPopup){
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        document.querySelector('body').style.overflowY = 'auto';
    }

    return (
        <>
            <Menu />
            <main className="Perfil">
                <NavPerfil
                    setButtonPopup={setButtonPopup}
                />

                <div className="profileSubView border">
                    a
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