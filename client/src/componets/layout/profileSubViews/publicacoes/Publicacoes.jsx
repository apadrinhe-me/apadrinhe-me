import "./Publicacoes.css";
import React, { useState } from 'react';
import Post from "../../post/Post";
import SobrePerfil from "./SobrePerfil";

function Publicacoes(props) {

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="Publicacoes">
            <div className="profile-about">
                <SobrePerfil />
            </div>

            <div className="profile-posts">
                <Post
                    profPicture="valentina.png"
                    fullname="Valentina"
                    aspiration="Aspirante a astrônoma"
                    postDate="2022-04-19 12:30:25"
                    postDescription="Experiência que eu tive quando tinha 9 anos! muito bom relembrar esse momento incrível, primeira vez que usei um telescópio 🤩"
                    postMedia="mao_casa.jpg"
                    qntLikes={1000}
                    qntComments={200}
                    qntShares={10}
                    setButtonPopup={setButtonPopup} 
                    btnApadrinhar={true}
                    />
            </div>
        </div>
    );
}

export default Publicacoes;