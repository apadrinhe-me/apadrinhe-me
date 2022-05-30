import "./cardCurso.css";
import React from "react";

const CardCurso = props => {
    return (
        <div className="cardCurso">
            <div className="containerRosa" ></div>
            <div className="containerCardCurso">

                <div className="cadCursoHeader">
                    <h3 className="cardTamanho1">Metodologia ágeis</h3>
                    <h4 className="cardTamanho2">Intituto Proa - Administração</h4>
                    <span className="stars">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </span>
                    <div className="separador"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum,
                        nesciunt repudiandae perferendis aut consectetur facere. Eius obcaecati
                        vero maiores quisquam, assumenda ex fugiat consequatur quod delectus odio
                        sunt officiis.</p>
                </div>
                <div className="interacaoCurso">
                    <span className="informacaoDuracao">
                        <i className="bi bi-clock-history"></i>
                        <div>
                            <h2 className="cardTamanho1">Duração</h2>
                            <h3 className="cardTamanho2">120h</h3>
                        </div>
                    </span>
                    <i className="bi bi-clipboard2-check"></i>
                    <i className="bi bi-star"></i>
                </div>
                <div className="InteracaoRecomendarMais">
                    <button className="buttonRecomendarMais">Recomendar</button>
                    <button className="buttonRecomendarMais buttonMais">. . .</button>
                </div>
            </div>

        </div>

    );
}

export default CardCurso;