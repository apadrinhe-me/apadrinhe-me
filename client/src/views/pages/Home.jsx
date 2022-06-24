import "./Home.css";
import React, { useState } from "react";
import Menu from "../../componets/layout/Menu";
import Post from "../../componets/layout/post/Post";
import NewPost from "../../componets/layout/newPost/NewPost";
import Spotlights from "../../componets/layout/spotlights/Spotlights";
import If from "../../componets/funcional/If";
import MenuMobile from "../../componets/layout/MenuMobile";
import ApadPopup from "../../componets/layout/apadPopup/ApadPopup";

const Home = () => {
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
            <Menu atual="Home" logged={false} />
            <div className="Home">
                <If test={viewport === 'desktop'}>
                    <div className="infinity-post-scroll">
                        <div className="new-post">
                            <NewPost profPicture="valentina.png" />
                        </div>

                        <Post
                            profPicture="natan_proa.jpg"
                            fullname="Natan Barbosa"
                            aspiration="Aspirante a desenvolvedor fullstack"
                            postDate="2022-04-19 12:30:25"
                            postDescription="Nos dias 11 e 12 de junho, aconteceu a primeira edição do Hackadrinhe-me, foram 26 horas com foco total no desenvolvimento da plataforma Apadrinhe-me, focando em usabilidade e acessibilidade.
                            Recebemos até certificado rs
                            👨‍💻👩‍💻🚀"
                            postMedia="postdonatan.jpg"
                            qntLikes={800}
                            qntComments={200}
                            qntShares={10} />

                        <Post
                            profPicture="aurora.jpg"
                            fullname="Aurora Seles"
                            aspiration="Jornalista e Professora"
                            postDate="2022-04-19 12:30:25"
                            postDescription="Amor recíproco. Gratidão, Equipe 3, do Instituto PROA. Beijo, com afeto 🌹."
                            postMedia="postaurora.png"
                            qntLikes={1500}
                            qntComments={600}
                            qntShares={10} />

                        <Post
                            profPicture="cris.jpg"
                            fullname="Cristian Ferreira"
                            aspiration="Aspirante a desenvolvedor fullstack"
                            postDate="2022-04-19 12:30:25"
                            postDescription="Gostaria de compartilhar com vocês essa grande conquista💙, minha aprovação nesse processo seletivo para o Instituto PROA, foram 3 meses de seleção, divididos em 5 etapas em uma média de 26 candidatos por vaga, fiquei muito feliz, por quê no meio de muitos, fui selecionado para fazer parte da família Proa.

                            O Instituto PROA é uma ONG, sem fins lucrativos, que forma jovens a se tornarem programadores Fulstack Júnior, já prontos para o mercado.
                            
                            Agradeço a todos pela essa oportunidade e ajuda durante o processo seletivo"
                            postMedia="postcristian.jpg"
                            qntLikes={1000}
                            qntComments={200}
                            qntShares={10} />

                        <Post
                            profPicture="proa.png"
                            fullname="Instituto Proa"
                            aspiration="ONG"
                            postDate="2022-04-19 12:30:25"
                            postDescription="💙 Os #JovensEmpregados dessa semana foram contratados pelas empresas: Via (Leila de Jesus Nascimento), Neon (Shayane Vieira), Fundação Vunesp (Bianca Lima De Souza Silva), Seguros SURA (Lucas Nardy), Inmetrics (Felipe Manzano) e Grupo FCamara (Gustavo Inacio Lacerda). 👩‍💼🧑🏽‍💼

                            🤝 Parabéns por essa conquista, PROANES! Aproveitem essa oportunidade e boa sorte nessa nova etapa. 🎉"
                            postMedia="postproa.jpg"
                            qntLikes={15000}
                            qntComments={7000}
                            qntShares={30} />

                        <Post
                            profPicture="wagner.png"
                            fullname="Wagner Pereira"
                            aspiration="Aspirante a Desenvolvedor Fullstack"
                            postDate="2022-04-19 12:30:25"
                            postDescription="Nos dias 11 e 12 de junho, aconteceu a primeira edição do Hackadrinhe-me, foram 26 horas com foco total no desenvolvimento da plataforma Apadrinhe-me, focando em usabilidade e acessibilidade."
                            postMedia="postwagner.png"
                            qntLikes={340}
                            qntComments={120}
                            qntShares={15} />

                        <Post
                            profPicture="lg.png"
                            fullname="Luis Gustavo"
                            aspiration="Aspirante a Desenvolvedor Fullstack"
                            postDate="2022-04-19 12:30:25"
                            postDescription="Oláaaa rede, venho compartilhar mais um experiência incrível proporcionado pelo Instituto PROA juntamente com a Oracle, (simplesmente a maior empresa de tecnologia B2B do mundo).

                            Foi um bootcamp de super aprendizado, onde pude aprender mais sobre análise de dados, aprendi a mexer na ferramenta Oracle Analytics e, desenvolvi em equipe uma apresentação com base nos dados analisados. E além de todos esses aprendizados, também foi disponibilizado a nós esse certificado!
                            
                            Agradeço ao Instituto PROA e à Oracle por proporcionar esse dia maravilhoso de troca de conhecimentos 💙🧡"
                            postMedia="postlg.png"
                            qntLikes={340}
                            qntComments={120}
                            qntShares={15} />
                    </div>

                    <div className="spotlights">
                        <Spotlights />
                    </div>
                </If>

                <If test={viewport === 'mobile'}>
                    <div className="new-post">
                        <NewPost profPicture="valentina.png" />
                    </div>

                    <h2>Destaques</h2>
                    <div className="spotlights my-scrollbar">
                        <Spotlights />
                    </div>

                    <h2>Postagens</h2>
                    <div className="infinity-post-scroll">
                        <Post
                            profPicture="valentina.png"
                            fullname="Natan Barbosa"
                            aspiration="Aspirante a desenvolvedor fullstack"
                            postDate="2022-04-19 12:30:25"
                            postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus numquam quas fuga autem at amet cumque sint modi impedit esse asperiores veritatis, ullam itaque reiciendis quaerat perferendis cum."
                            postMedia="mao_casa.jpg"
                            qntLikes={1000}
                            qntComments={200}
                            qntShares={10}
                        />
                    </div>
                </If>
            </div>
            <MenuMobile atual="Home" logged={false} />
        </>
    );
}

export default Home;
