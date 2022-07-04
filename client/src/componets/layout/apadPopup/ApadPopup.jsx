import "./ApadPupup.css";
import React, {useState} from "react";

import OthersCard from "./OthersCard";
import ApoioInicio from "./popUpviews/ApoioInicio";
import If from "../../funcional/If";
import ApoioEducacional from "./popUpviews/ApoioEducacional";
import ApoioDoacao from "./popUpviews/ApoioDoacao";
import ApoioMaterial from "./popUpviews/ApoioMaterial";

const ApadPopup = props => {
    //Animação de fechar o popup
    function closePopup(){
        document.querySelector(".popup-inner").classList.add('slideout');
        document.querySelector(".ApadPopup").classList.add('slideout');

        setTimeout(() => props.setTrigger(false), 450);
    }

    const[selectedApoio, setSelectedApoio] = useState(0);
    /*0 = Página inicial
    * 1 = Apadrinhar
    * 2 = Recomendação
    * 3 = Doação rápida
    * 4 = Doação de bens
    * 
    * 1- educacional
    * 2 - financeiro
    * 3 - material
    * 
    * */

    return(props.trigger) ? (
        <div className="ApadPopup">
            <div className="popup-inner">
                <button className="close-btn" onClick={ () => closePopup() }><i className="bi bi-x-lg"></i></button>

                <If test={selectedApoio === 0}>
                    <ApoioInicio
                        selectedApoio={selectedApoio}
                        setSelectedApoio={setSelectedApoio}
                    />
                </If>

                <If test={selectedApoio === 1}>
                    <ApoioEducacional 
                    fotoJovem={props.fotoJovem}
                    nomeJovem={props.nomeJovem}
                    aspiracaoJovem={props.aspiracaoJovem}
                    setSelectedApoio={setSelectedApoio}/>
                </If>

                <If test={selectedApoio === 3}>
                    <ApoioDoacao 
                    fotoJovem={props.fotoJovem}
                    nomeJovem={props.nomeJovem}
                    aspiracaoJovem={props.aspiracaoJovem}
                    setSelectedApoio={setSelectedApoio}/>
                </If>

                <If test={selectedApoio === 4}>
                    <ApoioMaterial 
                    fotoJovem={props.fotoJovem}
                    nomeJovem={props.nomeJovem}
                    aspiracaoJovem={props.aspiracaoJovem}
                    setSelectedApoio={setSelectedApoio}/>
                </If>

               
            </div>
        </div>
    ) : "";
}

export default ApadPopup;