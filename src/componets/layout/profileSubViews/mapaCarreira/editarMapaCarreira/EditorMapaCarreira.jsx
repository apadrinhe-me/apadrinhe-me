
import React, {useState} from "react";
import Menu from "../../../Menu";
import MenuMobile from "../../../MenuMobile";
import { Beforeunload } from 'react-beforeunload';

//imports das bibliotecas e estilos
import "./EditorMapaCarreira.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

//imports das ilustrações
import ill1 from "../../../../../media/illustrations/Progress_Flatline.svg";
import ill2 from "../../../../../media/illustrations/Winner_Isometric.svg";
import ill3 from "../../../../../media/illustrations/Motivation_Flatline.svg";
import {Link} from "react-router-dom";
import Timeline from "../Timeline";

const EditorMapaCarreira = props => {

    let goals = [
        {
            nome: "Goal 1",
            year: 2015,
            status: "achieved",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        },
        {
            nome: "Goal 2",
            year: 2016,
            status: "in-progress",
            selected: false
        }
    ]

    const [openFullscreen, setOpenFullscreen] = React.useState(false);
    const handleOpenFullscreen = () => setOpenFullscreen(true);
    const handleCloseFullscreen = () => setOpenFullscreen(false);

    const fullScreenModal = {
        position: 'absolute',
        width: "100vw",
        height: "100vh",
        bgcolor: '#191919',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const addMetaModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return(
        <>
            <Beforeunload onBeforeunload={e => e.preventDefault()} />

            <Menu/>
            <div className="EditorMapaCarreira">
                <div className="explicacaoMapa my-scrollbar">
                    <button className="close-btn"><i className="bi bi-x-lg"></i></button>
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
                        <button className="btn-view-model" onClick={handleOpenFullscreen}>Visualizar modelo de mapa de carreira</button>
                    </div>
                </div>

                <div className="montaMapa">
                    <div className="header">
                        <button className="save-editions"><i className="bi bi-check-lg"></i> Salvar alterações</button>
                        <Link to="/perfil/mapacarreira/" className="link"><button className="return-profile" onClick={() => {}}><i className="bi bi-arrow-return-left"></i> <span>Voltar para o perfil</span></button></Link>
                    </div>

                    <div>
                        <h3 className="section-title">Metas adicionadas</h3>
                    </div>

                    <div className="meta-cards my-scrollbar">
                        <Card sx={{ flexBasis: 200 }} className="my-card">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Meta 1 - escolar
                                </Typography>
                                <Typography variant="h3" sx={{ fontSize: 18 }}>
                                    Completar o Ensino Médio
                                </Typography>
                                <div className="card-details">
                                    <div className="detail">
                                        <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                                            Ano:
                                        </Typography>
                                        <Typography sx={{ fontSize: 15}}>
                                            2016
                                        </Typography>
                                    </div>

                                    <div className="detail">
                                        <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                                            Área:
                                        </Typography>
                                        <Typography sx={{ fontSize: 15}}>
                                            Ensino Médio
                                        </Typography>
                                    </div>

                                    <div className="detail">
                                        <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                                            Instituição:
                                        </Typography>
                                        <Typography sx={{ fontSize: 15}}>
                                            SESI
                                        </Typography>
                                    </div>

                                    <div>
                                        <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                                            Detalhes:
                                        </Typography>
                                        <Typography sx={{ fontSize: 15}}>
                                            Finalmente me formar para...
                                        </Typography>
                                    </div>

                                </div>
                            </CardContent>
                            <CardActions>
                                <Button className="btn-editar" variant="outlined" size="small"><i className="bi bi-pencil-square"></i> Editar meta</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ flexBasis: 200 }} className="my-card">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Meta 2 - escolar
                                </Typography>
                                <Typography variant="h3" sx={{ fontSize: 18 }}>
                                    Completar o Ensino Médio
                                </Typography>
                                <div className="card-details my-scrollbar">
                                    <div className="detail">
                                        <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                                            Ano:
                                        </Typography>
                                        <Typography sx={{ fontSize: 15}}>
                                            2016
                                        </Typography>
                                    </div>

                                    <div className="detail">
                                        <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                                            Área:
                                        </Typography>
                                        <Typography sx={{ fontSize: 15}}>
                                            Ensino Médio
                                        </Typography>
                                    </div>

                                    <div className="detail">
                                        <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                                            Instituição:
                                        </Typography>
                                        <Typography sx={{ fontSize: 15}}>
                                            SESI
                                        </Typography>
                                    </div>

                                    <div>
                                        <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                                            Detalhes:
                                        </Typography>
                                        <Typography sx={{ fontSize: 15}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam cum debitis dolore dolorum est ex explicabo laudantium nostrum optio placeat quo, rem rerum sequi sit suscipit tempora tenetur ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae, blanditiis consequuntur debitis dolor doloribus dolorum ex impedit ipsa iste molestiae omnis quae qui quibusdam rem tempore vero, vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem distinctio dolorem est fugit itaque maxime nulla optio provident, quae quam quasi quo, ratione reiciendis rerum suscipit temporibus vel voluptate.
                                        </Typography>
                                    </div>

                                </div>
                            </CardContent>
                            <CardActions>
                                <Button className="btn-editar" variant="outlined" size="small"><i className="bi bi-pencil-square"></i> Editar meta</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ flexBasis: 200 }} className="my-card">
                            <CardContent sx={{height: "100%"}}>
                                <Typography variant="h3" sx={{ fontSize: 18 }}>
                                    Adicionar nova meta
                                </Typography>
                                <div className="add-meta-div">
                                    <Button sx={{
                                        width: "100px",
                                        height: "100px",
                                        fontSize: 80
                                    }}><i className="bi bi-plus"></i></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <MenuMobile/>

            <Modal
                aria-labelledby="mostrar-exemplo-mapa-carreira"
                aria-describedby="mostrar-exemplo-mapa-carreira"
                open={openFullscreen}
                onClose={handleCloseFullscreen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openFullscreen}>
                    <Box sx={fullScreenModal}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default EditorMapaCarreira;