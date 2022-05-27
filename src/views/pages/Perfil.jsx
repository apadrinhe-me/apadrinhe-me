import "./Perfil.css";

import React, { useState } from "react";
import Menu from "../../componets/layout/Menu";
import NavPerfil from "../../componets/layout/navPerfil/NavPerfil";
import Post from "../../componets/layout/post/Post";
import SobrePerfil from "../../componets/layout/sobrePerfil/SobrePerfil";
import MenuMobile from "../../componets/layout/MenuMobile";
import ApadPopup from "../../componets/layout/apadPopup/ApadPopup";


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
            <main>
                <NavPerfil
                    setButtonPopup={setButtonPopup}
                />

                <div className="perfilSobrePost ">
                    <div className="infinity-post-scroll">
                        <Post
                            profPicture="natan_proa.jpg"
                            fullname="Natan Barbosa"
                            aspiration="Aspirante a desenvolvedor fullstack"
                            postDate="2022-04-19 12:30:25"
                            postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus numquam quas fuga autem at amet cumque sint modi impedit esse asperiores veritatis, ullam itaque reiciendis quaerat perferendis cum."
                            postMedia="mao_casa.jpg"
                            qntLikes={1000}
                            qntComments={200}
                            qntShares={10}
                            setButtonPopup={setButtonPopup}/>
                    </div>

                    <div>
                        <SobrePerfil />
                    </div>
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