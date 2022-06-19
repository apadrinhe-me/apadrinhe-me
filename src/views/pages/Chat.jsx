import React,{ useState } from "react";
import Menu from "../../componets/layout/Menu";
import MenuMobile from "../../componets/layout/MenuMobile";
import "./Chat.css";
import Contato from "../../componets/layout/chatComponents/contato/Contato";
import Contato_info from "../../componets/layout/chatComponents/contato_info/Contato_info";
import Msg from "../../componets/layout/chatComponents/msg/Msg";
import Msgbar from "../../componets/layout/chatComponents/msgbar/Msgbar";
import Button from "@mui/material/Button";
import {Drawer} from "@mui/material";
import Box from "@mui/material/Box";

const Chat = () => {
    const [drawer, setDrawer] = useState(false);

    return(
        <>
            <Menu logged={true}/>

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
                    <Button className="btn-show-contacts" variant="contained" sx={{width: "200px", mt: 2, alignSelf: "center"}} onClick={ () => setDrawer(true)}>lista de contatos</Button>

                    <div className="header">
                        <Contato_info
                            profPic="valentina.png"
                            nome="Valentina"
                            status="offline"
                        />
                    </div>
                    <div className="msgs">
                        <Msg pov="destinatario" hour="22:25">Mensagem de teste do destinatário (você)</Msg>
                        <Msg pov="remetente" hour="22:25">Mensagem de teste do remetente (eu)</Msg>
                        <Msg pov="remetente" hour="22:25">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci alias amet cumque eaque earum eius fuga inventore libero magnam maxime natus odio optio placeat quaerat quisquam quo, reiciendis sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur delectus doloribus eveniet illum in natus quibusdam reiciendis voluptas voluptatibus! Accusantium cupiditate, quisquam. Incidunt pariatur repellendus velit! Ipsum, libero, vitae!</Msg>
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
                sx={{color: "black", pt: "65px", background: "#6b6b6b"}}
            >
                <Box sx={{mt: "65px", display: "flex", flexDirection:"column", gap:"10px", p: "10px"}}>
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