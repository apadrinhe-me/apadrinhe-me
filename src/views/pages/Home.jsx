import "./Home.css";
import React, {useState} from "react";
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

    const[viewport, setviewport] = useState(window.innerWidth < 576 ? 'mobile' : 'desktop')
    window.addEventListener("resize", () => {
        if(window.innerWidth < 576){
            setviewport('mobile')
        } else {
            setviewport('desktop')
        }
    })



    return(
        <>
            <Menu atual="Home" logged={true}/>
            <div className="Home">
                <If test={viewport === 'desktop'}>
                    <div className="infinity-post-scroll">
                        <div className="new-post">
                           <NewPost profPicture="valentina.png" />
                        </div> 

                        <Post 
                        profPicture="valentina.png" 
                        fullname="Natan Barbosa" 
                        aspiration="Aspirante a desenvolvedor fullstack" 
                        postDate="2022-04-19 12:30:25"
                        postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus numquam quas fuga autem at amet cumque sint modi impedit esse asperiores veritatis, ullam itaque reiciendis quaerat perferendis cum."
                        postMedia="mao_casa.jpg" 
                        qntLikes={1000}
                        qntComments={200}
                        qntShares={10}/>

                        <Post 
                        profPicture="valentina.png" 
                        fullname="Natan Barbosa" 
                        aspiration="Aspirante a desenvolvedor fullstack" 
                        postDate="2022-04-19 12:30:25"
                        postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus numquam quas fuga autem at amet cumque sint modi impedit esse asperiores veritatis, ullam itaque reiciendis quaerat perferendis cum."
                        postMedia="mao_casa.jpg" 
                        qntLikes={1000}
                        qntComments={200}
                        qntShares={10}/>

                        <Post 
                        profPicture="valentina.png" 
                        fullname="Natan Barbosa" 
                        aspiration="Aspirante a desenvolvedor fullstack" 
                        postDate="2022-04-19 12:30:25"
                        postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus numquam quas fuga autem at amet cumque sint modi impedit esse asperiores veritatis, ullam itaque reiciendis quaerat perferendis cum."
                        postMedia="mao_casa.jpg" 
                        qntLikes={1000}
                        qntComments={200}
                        qntShares={10}/>

                        <Post 
                        profPicture="valentina.png" 
                        fullname="Natan Barbosa" 
                        aspiration="Aspirante a desenvolvedor fullstack" 
                        postDate="2022-04-19 12:30:25"
                        postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus numquam quas fuga autem at amet cumque sint modi impedit esse asperiores veritatis, ullam itaque reiciendis quaerat perferendis cum."
                        postMedia="mao_casa.jpg" 
                        qntLikes={1000}
                        qntComments={200}
                        qntShares={10}/>
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
            <MenuMobile atual="Home" logged={true} />
        </>
    );
}

export default Home;
