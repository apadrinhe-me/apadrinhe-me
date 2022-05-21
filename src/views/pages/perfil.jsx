import "./perfil.css";

import React, { useState } from "react";
import Menu from "../../componets/layout/Menu";
import NavPerfil from "../../componets/layout/navPerfil/NavPerfil";
import Post from "../../componets/layout/post/Post";
import SobrePerfil from "../../componets/layout/sobrePerfil/SobrePerfil";
import If from "../../componets/funcional/If";


const Perfil = () => {
    let mobileView = window.innerWidth <= 576 ? true : false;
    let desktopView = window.innerWidth > 576 ? true : false;

    const [viewport, setviewport] = useState(window.innerWidth < 576 ? 'mobile' : 'desktop')

    window.addEventListener("resize", () => {
        if (window.innerWidth < 576) {
            setviewport('mobile')
        } else {
            setviewport('desktop')
        }
    })
    return (
        <>

            <Menu />


            <main>
                <NavPerfil />
                <div className="perfilSobrePost ">
                    <div>

                        <If test={viewport === 'desktop'}>
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
                                    qntShares={10} />
                            </div>
                        </If>
                        <If test={viewport === 'mobile'}>
                            <div className="spotlights">
                                destaques
                            </div>
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
                                    qntShares={10} />
                            </div>
                        </If>
                    </div>

                    <div>

                        <SobrePerfil />
                    </div>
                </div>


            </main>

        </>
    );
}

export default Perfil;