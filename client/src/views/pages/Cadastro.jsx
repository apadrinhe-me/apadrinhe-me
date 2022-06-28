import "./Cadastro.css";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import If from "../../componets/funcional/If";

//imagens
import LogoMarca from "../../media/logo/logo-tipo-and-icon.svg";
import Cadastrado from "../../media/illustrations/cadastrado.svg";

//Telas cadastro
import SelectTypeUser from "../../componets/layout/pagesCadastro/SelectTypeUser";
import Card_cadastro from "../../componets/layout/card_cadastro/Card_cadastro";
import CreateLogin from "../../componets/layout/pagesCadastro/CreateLogin";
import PersonalInfo from "../../componets/layout/pagesCadastro/PersonalInfo";
import ParentInfo from "../../componets/layout/pagesCadastro/ParentInfo";
import EnderecoCadastro from "../../componets/layout/pagesCadastro/EnderecoCadastro";
import RevisionCadastro from "../../componets/layout/pagesCadastro/RevisionCadastro";

//MUI
import Alert from '@mui/material/Alert';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

//API
import { MyServer } from "../../services/api";

const steps = [
    'Selecione seu tipo de cadastro',
    'Crie seu login',
    'Adicione suas informações pessoais',
    'Adicione as informações de seu responável',
    'Adicione seu Endereço',
    'Revisão',
];

const boxCadastradoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    textAlign: "center",
};

function getIdadeUsuario(dataNasc) {
    let dataAtual = new Date();
    let idadeUser = dataAtual.getFullYear() - dataNasc.getFullYear();
    return idadeUser;
}

const Cadastro = () => {
    //Etapa atual do formulário. Ela aumenta ao clicar em continuar e diminui ao clicar em voltar
    const [cadEtapa, setCadEtapa] = useState(0);

    //componentes controlados
    const [selectedPadrinType, setSelectedPadrinType] = useState(null)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmSenha, setConfirmSenha] = useState("")
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [cpf, setCpf] = useState("")
    const [renda, setRenda] = useState("")
    const [escola, setEscola] = useState("")
    const [nickname, setNickname] = useState("")
    const [dataNasc, setDataNasc] = useState(null)
    const [genero, setGenero] = useState("")
    const [parente_nome, setParente_nome] = useState("")
    const [parente_cpf, setParente_cpf] = useState("")
    const [parente_dataNasc, setParente_dataNasc] = useState(null)
    const [parente_email, setParente_email] = useState("")
    const [precisaResponsavel, setPrecisaResponsavel] = useState(true);
    const [termosUso, setTermosUso] = useState(false);
    const [cep, setCep] = useState("");
    const [cepValido, setCepValido] = useState(false);
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");

    const [openCadastradoBox, setOpenCadastradoBox] = useState(false);

    //Objeto que armazena os dados do cadastro e põe no backend
    let cadastro = {
        userInfo: {
            tipo_usuario: selectedPadrinType,
            email_usuario: email,
            senha_usuario: senha,
            nome_completo_usuario: nomeCompleto,
            nickname_usuario: nickname,
            cpf_usuario: cpf,
            data_nasc_usuario: dataNasc,
            genero_usuario: genero,
            escolaridade: escola,
            renda: renda
        },
        locationInfo: {
            cep: cep,
            uf: uf,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            complemento: complemento,
        },
        parentInfo: {
            cpf_responsavel: parente_cpf,
            nome_responsavel: parente_nome,
            data_nasc_responsavel: parente_dataNasc,
            email_responsavel: parente_email
        }
    }
    //Função para fazer as verificações se está tudo preenchido certinho e seguir para próxima etapa
    const msg_erro = useRef(null);
    const msg_erro_text = useRef(null);

    function proximaEtapa(etapaAtual) {
        switch (etapaAtual) {
            case 0:
                if (selectedPadrinType === null) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Selecione um dos cards"
                } else {
                    msg_erro.current.classList.remove("show")
                    msg_erro_text.current.innerHTML = ""
                    setCadEtapa(1)
                }
                break;
            case 1:
                if (email == "" || senha == "" || confirmSenha == "") {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Preencha todos os campos"
                } else if (senha !== confirmSenha) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "As senhas não batem"
                } else if (senha.length < 6) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "A senha deve conter ao menos 6 caracteres"
                } else {
                    msg_erro.current.classList.remove("show")
                    msg_erro_text.current.innerHTML = ""
                    setCadEtapa(2)
                }
                break;
            case 2:
                if (nomeCompleto == "" || cpf == "" || nickname == "" || dataNasc == null || genero == "" || renda == "" || (selectedPadrinType == "ser_apadrinhado" && escola == "")) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Preencha todos os campos"
                } else if (cpf.length !== 11) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Digite um cpf válido"
                } else if (selectedPadrinType === "apadrinhar" && getIdadeUsuario(dataNasc) < 18) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Você precisa ser maior de 18 anos para apadrinhar"
                } else if (selectedPadrinType === "ser_apadrinhado" && getIdadeUsuario(dataNasc) < 13) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Você precisa ser maior de 13 anos para entrar"
                } else {
                    msg_erro.current.classList.remove("show")
                    msg_erro_text.current.innerHTML = ""
                    if (selectedPadrinType === "apadrinhar" || (selectedPadrinType === "ser_apadrinhado" && getIdadeUsuario(dataNasc) >= 18)) {
                        setPrecisaResponsavel(false)
                        setCadEtapa(4)
                    } else {
                        setPrecisaResponsavel(true)
                        setCadEtapa(3)
                    }
                }
                break;
            case 3:
                if (parente_nome == "" || parente_cpf == "" || parente_email == "" || parente_dataNasc == null) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Preencha todos os campos"
                } else if (parente_cpf.length !== 11) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Digite um cpf válido"
                } else if (getIdadeUsuario(parente_dataNasc) < 18) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "O responsável precisa ser maior de 18 anos"
                } else {
                    msg_erro.current.classList.remove("show")
                    msg_erro_text.current.innerHTML = ""
                    setCadEtapa(4)
                }
                break;
            case 4:
                if (cep == "" || uf == "" || cidade == "" || bairro == null || rua == null || numero == null) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Preencha todos os campos"
                } else if (cep.length !== 8) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Digite um cep válido"
                } else if (!cepValido) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Digite um CEP válido"
                } else {
                    msg_erro.current.classList.remove("show")
                    msg_erro_text.current.innerHTML = ""
                    setCadEtapa(5)
                }
                break;
            case 5:
                if (!termosUso) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Aceite os termos de uso"
                } else {
                    msg_erro.current.classList.remove("show")
                    msg_erro_text.current.innerHTML = ""

                    //cadastrarUsuário
                    MyServer
                        .post("/register", cadastro)
                        .then(response => {
                            if (response.data.cadastrado) {
                                setOpenCadastradoBox(true);
                            } else {
                                alert(response.data.msg)
                            }
                        })
                }
                break;
        }

    }

    return (
        <div className="Cadastro">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="Cards">
                    <div className="container_cad">
                        <img className="logoCadastro" src={LogoMarca} height="50px" />
                        {/*Stepper*/}
                        <Box sx={{ width: '100%' }} className="stepper-box">
                            <Stepper activeStep={cadEtapa} alternativeLabel >
                                {steps.map((label, key) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                        {key === 3 ? <Typography variant="caption" sx={{ display: "block", width: "100%", textAlign: "center", mt: 1, color: "gray" }}>Caso &lt; 18 anos</Typography> : ""}
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>

                        {/*etapa 1*/}
                        <If test={cadEtapa === 0}>
                            <SelectTypeUser proximaEtapa={proximaEtapa}>
                                <Card_cadastro
                                    type="ser_apadrinhado"
                                    selectedPadrinType={selectedPadrinType}
                                    setSelectedPadrinType={setSelectedPadrinType}
                                >
                                    <h3 className="title_card">Quero ser <br /> afilhado(a)</h3>
                                    <p className="text_card">Crie conteúdeo para ser visto e receber ajuda de diversos apoiadores cadastrados na plataforma</p>
                                </Card_cadastro>

                                <Card_cadastro type="apadrinhar"
                                    selectedPadrinType={selectedPadrinType}
                                    setSelectedPadrinType={setSelectedPadrinType}
                                >
                                    <h3 className="title_card">Quero <br />apoiar</h3>
                                    <p className="text_card"> Acompanhe o desenvolvimento de jovens e encontre um para apoiar de diversas maneiras </p>
                                </Card_cadastro>
                            </SelectTypeUser>
                        </If>


                        {/*etapa 2*/}
                        <If test={cadEtapa === 1}>
                            <CreateLogin
                                cadEtapa={cadEtapa}
                                setCadEtapa={setCadEtapa}
                                proximaEtapa={proximaEtapa}
                                email={email}
                                senha={senha}
                                confirmSenha={confirmSenha}
                                setEmail={setEmail}
                                setSenha={setSenha}
                                setConfirmSenha={setConfirmSenha}
                            />
                        </If>

                        {/*etapa 3*/}
                        <If test={cadEtapa === 2}>
                            <PersonalInfo
                                cadEtapa={cadEtapa}
                                setCadEtapa={setCadEtapa}
                                proximaEtapa={proximaEtapa}
                                nomeCompleto={nomeCompleto}
                                cpf={cpf}
                                nickname={nickname}
                                dataNasc={dataNasc}
                                genero={genero}
                                setNomeCompleto={setNomeCompleto}
                                setCpf={setCpf}
                                setNickname={setNickname}
                                setDataNasc={setDataNasc}
                                setGenero={setGenero}
                                escola={escola}
                                setEscola={setEscola}
                                renda={renda}
                                setRenda={setRenda}
                                selectedPadrinType={selectedPadrinType}
                            />
                        </If>

                        {/*etapa 4*/}
                        <If test={cadEtapa === 3}>
                            <ParentInfo
                                cadEtapa={cadEtapa}
                                setCadEtapa={setCadEtapa}
                                proximaEtapa={proximaEtapa}
                                parente_nome={parente_nome}
                                parente_cpf={parente_cpf}
                                parente_dataNasc={parente_dataNasc}
                                parente_email={parente_email}
                                setParente_nome={setParente_nome}
                                setParente_cpf={setParente_cpf}
                                setParente_dataNasc={setParente_dataNasc}
                                setParente_email={setParente_email}
                            />
                        </If>

                        {/*etapa 5*/}
                        <If test={cadEtapa === 4}>
                            <EnderecoCadastro
                                cadEtapa={cadEtapa}
                                setCadEtapa={setCadEtapa}
                                proximaEtapa={proximaEtapa}
                                cep={cep}
                                uf={uf}
                                cidade={cidade}
                                bairro={bairro}
                                rua={rua}
                                numero={numero}
                                complemento={complemento}
                                setCep={setCep}
                                setUf={setUf}
                                setCidade={setCidade}
                                setBairro={setBairro}
                                setRua={setRua}
                                setNumero={setNumero}
                                setComplemento={setComplemento}
                                msg_erro={msg_erro}
                                msg_erro_text={msg_erro_text}
                                cepValido={cepValido}
                                setCepValido={setCepValido}
                            />
                        </If>

                        {/*etapa 6*/}
                        <If test={cadEtapa === 5}>
                            <RevisionCadastro
                                cadEtapa={cadEtapa}
                                setCadEtapa={setCadEtapa}
                                cadastro={cadastro}
                                proximaEtapa={proximaEtapa}
                                termosUso={termosUso}
                                setTermosUso={setTermosUso}
                                precisaResponsavel={precisaResponsavel}
                            />
                        </If>

                        <Alert severity="error" ref={msg_erro} className="msg_erro hide"><span className="msg_erro_text" ref={msg_erro_text}>ala</span></Alert>
                    </div>
                </div>
            </LocalizationProvider>

            <Modal
                open={openCadastradoBox}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxCadastradoStyle} className="boxCadastro">
                    <img src={Cadastrado} height={100} />
                    <h3>Cadastro realizado com sucesso! <i className="bi bi-check-circle-fill"></i></h3>
                    <p>
                        Tudo certo com o seu cadastro. Você já pode fazer login e explorar a plataforma!
                    </p>
                    <Link to="/login" className="btn-redirect-login">Vamos lá</Link>
                </Box>
            </Modal>

        </div>
    );
}

export default Cadastro;