import "./Cadastro.css";
import React, { useState, useRef } from "react";
import If from "../../componets/funcional/If";
import SelectTypeUser from "../../componets/layout/pagesCadastro/SelectTypeUser";
import Card_cadastro from "../../componets/layout/card_cadastro/Card_cadastro";
import CreateLogin from "../../componets/layout/pagesCadastro/CreateLogin";
import PersonalInfo from "../../componets/layout/pagesCadastro/PersonalInfo";
import ParentInfo from "../../componets/layout/pagesCadastro/ParentInfo";
import RevisionCadastro from "../../componets/layout/pagesCadastro/RevisionCadastro";

import Alert from '@mui/material/Alert';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import { colors } from "@mui/material";
import Typography from '@mui/material/Typography';
import { SxProps } from "@mui/material";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup"


const steps = [
    'Selecione seu tipo de cadastro',
    'Crie seu login',
    'Adicione suas informações pessoais',
    'Adicione as informações de seu responável',
    'Revisão',
];

function getIdadeUsuario(dataNasc) {
    let dataAtual = new Date();
    let idadeUser = dataAtual.getFullYear() - dataNasc.getFullYear()
    return idadeUser;
}

function cadastrarUser(infos) {
    console.log(infos)
    window.location.href = "/"
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
    const [nickname, setNickname] = useState("")
    const [dataNasc, setDataNasc] = useState(null)
    const [genero, setGenero] = useState("")
    const [parente_nome, setParente_nome] = useState("")
    const [parente_cpf, setParente_cpf] = useState("")
    const [parente_dataNasc, setParente_dataNasc] = useState(null)
    const [parente_email, setParente_email] = useState("")
    const [precisaResponsavel, setPrecisaResponsavel] = useState(true);
    const [termosUso, setTermosUso] = useState(false);

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
            genero_usuario: genero
        },
        parentInfo: {
            cpf_responsavel: parente_cpf,
            nome_responsavel: parente_nome,
            data_nasc_responsavel: parente_dataNasc,
            email_responsavel: parente_email
        }
    }

    console.log(cadastro)

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
                } else {
                    msg_erro.current.classList.remove("show")
                    msg_erro_text.current.innerHTML = ""
                    setCadEtapa(2)
                }
                break;
            case 2:
                if (nomeCompleto == "" || cpf == "" || nickname == "" || dataNasc == null || genero == "") {
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
                if (!termosUso) {
                    msg_erro.current.classList.add("show")
                    msg_erro_text.current.innerHTML = "Aceite os termos de uso"
                } else {
                    msg_erro.current.classList.remove("show")
                    msg_erro_text.current.innerHTML = ""
                    cadastrarUser(cadastro);
                }
                break;
        }

    }

    return (
        <div className="Cadastro">
            <Formik initialValues={{}} onSubmit={cadastro} validationSchema={cadastro}>

                <div className="Cards">
                    <div className="container_cad">
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
                            <RevisionCadastro
                                cadEtapa={cadEtapa}
                                setCadEtapa={setCadEtapa}
                                cadastro={cadastro}
                                proximaEtapa={proximaEtapa}
                                precisaResponsavel={precisaResponsavel}
                                termosUso={termosUso}
                                setTermosUso={setTermosUso}
                            />
                        </If>

                        <Alert severity="error" ref={msg_erro} className="msg_erro hide"><span className="msg_erro_text" ref={msg_erro_text}>ala</span></Alert>
                    </div>
                </div>
            </Formik>
        </div>
    );
}

export default Cadastro;