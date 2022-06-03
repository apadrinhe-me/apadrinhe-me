import "./Publicacoes.css";
import React,{ useState } from 'react';
import Post from "../../post/Post";
import SobrePerfil from "./SobrePerfil";

function Publicacoes(props) {

    const[buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="Publicacoes">
            <div className="profile-about">
                <SobrePerfil />
            </div>

            <div className="profile-posts">
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
                    setButtonPopup={setButtonPopup} />
            </div>
        </div>
    );
}

export default Publicacoes;