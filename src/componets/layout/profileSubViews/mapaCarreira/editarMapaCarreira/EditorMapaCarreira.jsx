
import React, {useState} from "react";
import Menu from "../../../Menu";
import MenuMobile from "../../../MenuMobile";

//imports das bibliotecas e estilos
import "./EditorMapaCarreira.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

    return(
        <>
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
                        <button className="btn-view-model">Visualizar modelo de mapa de carreira</button>
                    </div>
                </div>

                <div className="montaMapa">
                    <div className="header">
                        <h3 className="section-title">Metas adicionadas</h3>
                        <Link to="/perfil/mapacarreira/"><button className="return-profile"><i className="bi bi-arrow-return-left"></i> Voltar para o perfil</button></Link>
                    </div>

                    <div className="meta-cards">
                        <Card sx={{ flexBasis: 200 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Meta escolar
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

                        <Card sx={{ flexBasis: 200 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Meta escolar
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

                        <Card sx={{ flexBasis: 200 }}>
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

                    <div className="mapa-preview">
                        <h3>Pré-visualização do mapa</h3>

                        <div className="timeline-div">
                            <Timeline goals={goals}/>
                        </div>
                    </div>

                </div>
            </div>
            <MenuMobile/>
        </>
    );
}

export default EditorMapaCarreira;