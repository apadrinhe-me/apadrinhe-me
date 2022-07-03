import React, { useState } from "react";
import Menu from "../../componets/layout/Menu";
import MenuMobile from "../../componets/layout/MenuMobile";
import "./Chat.css";
import Contato from "../../componets/layout/chatComponents/contato/Contato";
import Contato_info from "../../componets/layout/chatComponents/contato_info/Contato_info";
import Msg from "../../componets/layout/chatComponents/msg/Msg";
import Msgbar from "../../componets/layout/chatComponents/msgbar/Msgbar";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import mayara from "../../media/profile_pictures/mayara.png"

const Chat = () => {
    const [drawer, setDrawer] = useState(false);

    return (
        <>
            <Menu logged={true} />

            <div className="Chat">
                <div className="contatos">
                    <h2>Conversas</h2>
                    <div className="lista-contatos">
                        <Contato
                            prof_picture="mayara.png"
                            nome_contato="Mayara Rodrigues"
                            ultima_msg="Mayara Rodrigues te recomendou um curso..."
                            tempo="3 min"
                        />
                        <Contato
                            prof_picture="Ro.png"
                            nome_contato="Rosani bertelli"
                            ultima_msg="Olá valentina, que tal ser minha afilhada..."
                            tempo="17 min"
                        />
                        <Contato
                            prof_picture="cris.jpg"
                            nome_contato="Cristian Ferreira"
                            ultima_msg="Cristian Ferreira te recomendou um curso..."
                            tempo="16 min"
                        />
                        <Contato
                            prof_picture="cadu.png"
                            nome_contato="Carlos Jesus"
                            ultima_msg="Valentina, o que você achou do Curso..."
                            tempo="34 min"
                        />
                    </div>
                </div>
                <div className="conversa">
                    <Button className="btn-show-contacts" variant="contained" sx={{ width: "200px", mt: 2, alignSelf: "center" }} onClick={() => setDrawer(true)}>lista de contatos</Button>

                    <div className="header">
                        <Contato_info
                            profPic="aurora.png"
                            nome="Aurora Seles"
                            status="offline"
                        />
                    </div>
                    <div className="msgs">
                        <Msg pov="destinatario" hour="22:25">“Por que” deve ser usado em perguntas e
                            sempre que for possível inserir a palavra “razão” ou “motivo” na frase.
                            “Por quê” deve ser usado no final das frases e tem o mesmo sentido de
                            “por qual razão”. Já “porque” tem o mesmo valor de “pois” e é usado em
                            respostas.
                            <br />
                            Essa é a difença, espero que tenha ajudado
                            <br />
                            Beijo, com afeto 🌹 (você)</Msg>
                        <Msg pov="remetente" hour="22:25">Muito obgd prof, ficou muito claro(eu)</Msg>
                    </div>
                    <div className="msgbar-div">
                        <Msgbar />
                    </div>
                </div>
            </div>

            <MenuMobile logged={true} />

            <Drawer
                open={drawer}
                onClose={() => setDrawer(false)}
                sx={{ color: "black", pt: "65px", background: "#6b6b6b" }}
            >
                <Box sx={{ mt: "65px", display: "flex", flexDirection: "column", gap: "10px", p: "10px" }}>
                    <button className="btn-format drawer-close-btn" onClick={() => setDrawer(false)}><i className="bi bi-x-lg"></i></button>
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
                </Box>
            </Drawer>
        </>
    );
}

export default Chat;