
import React, {useState} from "react";
import Menu from "../../../Menu";
import MenuMobile from "../../../MenuMobile";

//imports das bibliotecas e estilos
import "./EditorMapaCarreira.css"
import "bootstrap-icons/font/bootstrap-icons.css";

//imports das ilustrações
import ill1 from "../../../../../media/illustrations/Progress_Flatline.svg";
import ill2 from "../../../../../media/illustrations/Winner_Isometric.svg";
import ill3 from "../../../../../media/illustrations/Motivation_Flatline.svg";

const EditorMapaCarreira = props => {
    return(
        <>
            <Menu/>
            <div className="EditorMapaCarreira">
                <div className="explicacaoMapa my-scrollbar">
                    <button className="close-btn"><i class="bi bi-x-lg"></i></button>
                    <h2 className="section-title">Editar Mapa de carreira</h2>

                    <div className="img-text">
                        <p>Construa o seu mapa de carreira. Conte aqui sua história, conquistas, e objetivos e mostre para o mundo como você chegou até aqui e onde pretende chegar</p>
                        
                        <img src={ill1} alt="Linha de motivação" />
                    </div>

                    <div className="img-text">
                        <img src={ill2} alt="Linha de motivação" />
                        
                        <p>Adicione suas conquistas passadas e conte detalhes sobre elas.</p>
                    </div>

                    <div className="img-text">
                        <p>Adicione seus objetivos futuros e conte onde você quer chegar e quando pretende realiza-los.</p>
                        
                        <img src={ill3} alt="Linha de motivação" />
                    </div>

                    <div>
                        <p>Se ainda está com dúvidas, elaboramos um exemplo de mapa de carreira para que você possa se inspirar na hora de criar o seu! Clique no botão abaixo para visualizar o modelo.</p>
                    </div>

                    <div>
                        <button className="btn-view-model">Visualizar modelo de mapa de carreira</button>
                    </div>
                </div>

                <div className="montaMapa">
                    
                </div>
            </div>
            <MenuMobile/>
        </>
    );
}

export default EditorMapaCarreira;