
import React, {useState} from "react";
import Menu from "../../../Menu";
import MenuMobile from "../../../MenuMobile";
import { Beforeunload } from 'react-beforeunload';
import Timeline from "../Timeline";

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
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//imports das ilustrações
import ill1 from "../../../../../media/illustrations/Progress_Flatline.svg";
import ill2 from "../../../../../media/illustrations/Winner_Isometric.svg";
import ill3 from "../../../../../media/illustrations/Motivation_Flatline.svg";
import {Link} from "react-router-dom";

const EditorMapaCarreira = props => {

    //Objeto para as metas de exemplo
    const exampleGoals = [
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
            nome: "Goal 3",
            year: 2017,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 4",
            year: 2018,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 5",
            year: 2019,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 6",
            year: 2020,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 7",
            year: 2021,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 8",
            year: 2022,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 9",
            year: 2023,
            status: "not-achieved",
            selected: false
        },
        {
            nome: "Goal 10",
            year: 2024,
            status: "final-goal",
            selected: false
        }
    ]

    //objeto para as metas que o usuário for adicionando
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

    //configurações para o modal fullscreen de exibir timeline de exemplo
    const [openFullscreen, setOpenFullscreen] = useState(false);
    const handleOpenFullscreen = () => setOpenFullscreen(true);
    const handleCloseFullscreen = () => setOpenFullscreen(false);

    //configurações para o modal de adicionar nova meta/editar meta
    const [openNewMeta, setOpenNewMeta] = useState(false);
    const handleOpenNewMeta = () => setOpenNewMeta(true);
    const handleCloseNewMeta = () => setOpenNewMeta(false);

    //estilo do modal de tela cheia
    const fullScreenModal = {
        position: 'absolute',
        marginTop: '60px',
        width: "100vw",
        height: "calc(100vh - 60px)",
        bgcolor: '#191919',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        gap: '15px'
    };

    //estilo do modal de nova meta
    const addMetaModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: 700,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4
    };

    //componentes controlados do formulário de adicionar meta
    const [metaType, setMetaType] = useState('');
    const [metaName, setMetaName] = useState('');
    const [metaBegin, setMetaBegin] = useState('');
    const [metaFinal, setMetaFinal] = useState('');
    const [metaArea, setMetaArea] = useState('');
    const [metaLocal, setMetaLocal] = useState('');
    const [metaDetails, setMetaDetails] = useState('');
    const [metaCheck, setMetaCheck] = useState(false);
    const [metaObjective, setMetaObjective] = useState(false);

    //Array de área de conhecimento que o usuário pode escolher
    const knowlodge_areas = [
        'Tecnologia',
        'Logística',
        'Administração',
        'Gestão de empresas',
        'Ensino médio',
        'Programação',
        'Pesquisa científica',
        'Historia',
        'Geografia'
    ];

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
                                <Button className="btn-editar" variant="outlined" size="small" onClick={() => handleOpenNewMeta()}><i className="bi bi-pencil-square"></i> Editar meta</Button>
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
                                <Button className="btn-editar" variant="outlined" size="small" onClick={() => handleOpenNewMeta()}><i className="bi bi-pencil-square"></i> Editar meta</Button>
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
                                    }}><i className="bi bi-plus" onClick={() => handleOpenNewMeta()}></i></Button>
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
                        <div className="header-div">
                            <h3>Visualizar modelo de mapa de carreira</h3>
                            <button className="close-btn" onClick={handleCloseFullscreen}><i className="bi bi-x-lg"></i></button>
                        </div>
                        <div className="editor-div-timeline">
                            <Timeline goals={exampleGoals} />
                        </div>
                    </Box>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="adicionar-meta"
                aria-describedby="adicionar-meta"
                open={openNewMeta}
                onClose={handleCloseNewMeta}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openNewMeta}>
                    <Box sx={addMetaModal}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <h3>Adicionar nova meta</h3>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" spacing={3}>
                                    <Grid item container direction="column" spacing={2} flex={1}>
                                        <Grid item>
                                            <FormControl variant="filled" className="form-control" fullWidth>
                                                <InputLabel id="tipo_meta">Tipo da meta *</InputLabel>
                                                <Select
                                                    labelId="tipo_meta"
                                                    id="tipo_meta"
                                                    value={metaType}
                                                    onChange={e => setMetaType(e.target.value)}
                                                    label="Tipo da meta*"
                                                    required
                                                >
                                                    <MenuItem value={1}>Acadêmica</MenuItem>
                                                    <MenuItem value={2}>Intercâmbio</MenuItem>
                                                    <MenuItem value={3}>Viajem</MenuItem>
                                                    <MenuItem value={3}>Profissional</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                required
                                                id="nome_meta"
                                                label="Nome da meta"
                                                placeholder="Completar o ensino médio"
                                            />
                                        </Grid>
                                        <Grid item>
                                            <input type="date"/>
                                        </Grid>
                                        <Grid item>
                                            <input type="date"/>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction="column" spacing={2} flex={1}>
                                        <Grid item>
                                            <Autocomplete
                                                className="form-control"
                                                disablePortal
                                                fullWidth
                                                id="meta_area"
                                                options={knowlodge_areas}
                                                renderInput={(params) => <TextField {...params} label="Area de conhecimento" variant="filled" value={metaArea}
                                                                                    onChange={e => setMetaArea(e.target.value)} />}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                required
                                                id="instituicao_meta"
                                                label="Instituição/empresa/plataforma"
                                                placeholder="Etec, USP, Microsoft, Udemy etc."
                                                value={metaLocal}
                                                onChange={e => setMetaLocal(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="meta_descricao"
                                                label="Descrição"
                                                multiline
                                                maxRows={3}
                                                value={metaDetails}
                                                onChange={e => setMetaDetails(e.target.value)}
                                                variant="filled"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel control={<Checkbox checked={metaCheck} onChange={e => setMetaCheck(e.target.checked)} />} label="Eu já concluí essa meta" />
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel control={<Checkbox checked={metaObjective} onChange={e => setMetaObjective(e.target.checked)} />} label="Essa meta é o meu objetivo final" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default EditorMapaCarreira;