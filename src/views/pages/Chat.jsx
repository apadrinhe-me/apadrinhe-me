import React from "react";
import Menu from "../../componets/layout/Menu";
import MenuMobile from "../../componets/layout/MenuMobile";
import "./Chat.css";
import Contato from "../../componets/layout/chatComponents/contato/Contato";

const Chat = () => {
    return(
        <>
            <Menu />

            <div className="Chat">
                <div className="contatos">
                    <h2>Conversas</h2>
                    <div className="lista-contatos">
                        <Contato 
                            prof_picture="valentina.png"
                            nome_contato="Valentina"
                            ultima_msg="Carlos te recomendou um curso..."
                            tempo="30 min"
                        />
                        <Contato 
                            prof_picture="valentina.png"
                            nome_contato="Valentina"
                            ultima_msg="Carlos te recomendou um curso..."
                            tempo="30 min"
                        />
                        <Contato 
                            prof_picture="valentina.png"
                            nome_contato="Valentina"
                            ultima_msg="Carlos te recomendou um curso..."
                            tempo="30 min"
                        />
                        <Contato 
                            prof_picture="valentina.png"
                            nome_contato="Valentina"
                            ultima_msg="Carlos te recomendou um curso..."
                            tempo="30 min"
                        />
                    </div>
                </div>
                <div className="conversa">
                    
                </div>
            </div>

            <MenuMobile />
        </>
    );
}

export default Chat;