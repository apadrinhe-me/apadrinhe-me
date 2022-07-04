import "./Moments.css";
import React, { useState, useEffect } from "react";
import Menu from "../../componets/layout/Menu";
import MenuMobile from "../../componets/layout/MenuMobile";
import MomentsPost from "../../componets/layout/momentsPost/MomentsPost";
import ForYou from "../../componets/layout/forYou/ForYou";
import MomentsFullscreen from "../../componets/layout/momentsFullScreen/MomentsFullscreen";
import { MyServer } from "../../services/api";

let login;

const Moments = () => {
    const [videoFullscreen, setVideoFullscreen] = useState(0);

    useEffect(() => {
        if (videoFullscreen === 1) {
            document.querySelector(".Menu").style.display = "none";
        } else {
            document.querySelector(".Menu").style.display = "flex";
        }
    })

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
            <Menu logged={logged} atual="Moments" />
            <div className="Moments">
                <div className="container">
                    <aside className={videoFullscreen !== 0 ? "for-you my-scrollbar fulscreenmode" : "for-you my-scrollbar"} >
                        <ForYou />
                    </aside>
                    <main className={videoFullscreen !== 0 ? "moments-feed fulscreenmode my-scrollbar" : "moments-feed my-scrollbar"}>
                        <MomentsPost
                            id={1}
                            setFullscreen={setVideoFullscreen}
                            usuario="Valentina"
                            data="19 de abril de 2022"
                            hashtag="#Apadrinhe-me, #Tecnologia, #Educação,"
                            objetivo="Aspirante a astrônoma"
                            titulo="Estudando muito para alcançar meus objetivos 😁📚"
                            profile="valentina.png"
                            video="valentinamoments.mp4"
                            like="2.2k"
                            comentario="1.2k"
                            compartilhamento="1.1k"
                        />

                        <MomentsPost
                            id={2}
                            setFullscreen={setVideoFullscreen}
                            usuario="Carlos Eduardo"
                            data="19 de abril de 2022"
                            hashtag="#Instituto Proa, #Biologia, #Livros,"
                            objetivo="Aspirante a Biologo"
                            titulo="Nem humanas, Nem exatas, Biologicas 🙈"
                            profile="cadu.png"
                            video="jovemEstudando.mp4"
                            like="1.2k"
                            comentario="789"
                            compartilhamento="450"
                        />

                        <MomentsPost
                            id={3}
                            setFullscreen={setVideoFullscreen}
                            usuario="Murilo Moura"
                            data="14 de março de 2022"
                            hashtag="#mecanico, #Senac, #Gravidade,"
                            objetivo="Aspirante a Engenheiro"
                            titulo="Com grandes poderes, vem grandes responsabilidades 🚀🔧"
                            profile="murilo.png"
                            video="sonhador.mp4"
                            like="4.3k"
                            comentario="2.4"
                            compartilhamento="1.6"
                        />


                    </main>
                    <div className={videoFullscreen !== 0 ? "full-screen-post fulscreenmode" : "full-screen-post"}>
                        <MomentsFullscreen id={1} setFullscreen={setVideoFullscreen}  nome="dacu"/>
                        <MomentsFullscreen id={2} setFullscreen={setVideoFullscreen} nome="dacu"/>
                        <MomentsFullscreen id={3} setFullscreen={setVideoFullscreen} nome="dacu"/>
                    </div>
                </div>
            </div>
            <MenuMobile atual="Moments" logged={false} />
        </>
    );
}

export default Moments;
