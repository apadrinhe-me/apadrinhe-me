import "./Perfil.css";

import React, { useState, useEffect } from "react";
import Menu from "../../componets/layout/Menu";
import NavPerfil from "../../componets/layout/navPerfil/NavPerfil";
import MenuMobile from "../../componets/layout/MenuMobile";
import { MyServer } from "../../services/api";

let login;

const Perfil = props => {

    const [logged, setLogged] = useState(false);

    //verificar se está logado
    useEffect(() => {
        MyServer.get("/login").then(response => {
            //Não pode logado na página de login
            if (response.data.logged) {
                login = response.data.user;
                setLogged(true)
            }
        })
    }, [])

    return (
        <>
            <Menu logged={logged} />
            <main className="Perfil">
                <NavPerfil profType="jovem" id={1}/>

                <div className="profileSubView">
                    {props.children}
                </div>
            </main>

            <MenuMobile atual="Home" logged={true} />
        </>
    );
}

export default Perfil;