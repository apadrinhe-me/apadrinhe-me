import React, {useState} from "react";
import "./ApoioMaterial.css";
import LogoMaterial from "../../../../media/icons/IconsApoios/sponsoring.svg"
import ProfPicture from "../../profPicture/ProfPicture";
import LogoApadrinheme from "../../../../media/logo/logo-tipo-and-icon.svg";
import LogoMelhorEnvio from "../../../../media/logo/logo_melhor_envio-01.svg";

//MUI
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import OutlinedInput from '@mui/material/OutlinedInput';

const exemplosCategorias = [
    "Material Escolar",
    "Livro/apostila",
    "Eletrônico",
]

const ApoioMaterial = props => {
    const [categoria, setCategoria] = useState('');
    const handleChangeCat = (event) => {
        setCategoria(event.target.value);
    };

    const [condicao, setCondicao] = useState('');
    const handleChangeCond = (event) => {
        setCondicao(event.target.value);
    };

    return (
        <>
            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>
            <div className="ApoioMaterial">
                <div className="header">
                    <div className="nome-apoio">
                        <img src={LogoMaterial} alt="dinheiro e raio" height={80}/>
                        <h3>Apadrinhamento de material</h3>
                    </div>

                    <div className="quem-apoia">
                        <ProfPicture src={props.fotoJovem} scale={60} />
                        <div className="apoiado-nome">
                            <strong>{props.nomeJovem}</strong>
                            <span className="aspiracao">{props.aspiracaoJovem}</span>
                        </div>
                    </div>
                </div>

                <div className="donateInfo">
                    <h3>O que você quer doar?</h3>

                    <div className="donategrid">
                        <div className="donateColumn">
                            <TextField label="Objeto" placeholder="Nome do objeto que você quer doar" variant="outlined" fullWidth/>
                            <TextField label="Descrição" placeholder="Detalhes..." variant="outlined" multiline rows={4} fullWidth/>
                        </div>

                        <div className="donateColumn">
                            <Autocomplete
                                disablePortal
                                options={exemplosCategorias}
                                renderInput={(params) => <TextField {...params} label="Categoria" />}
                            />
                            <FormControl className="myselect">
                                <InputLabel htmlFor="demo-dialog-native">Condição</InputLabel>
                                <Select
                                    native
                                    value={condicao}
                                    onChange={handleChangeCond}
                                    input={<OutlinedInput label="Condição" id="demo-dialog-native" />}
                                >
                                    <option value="novo">novo</option>
                                    <option value="semi-novo">semi-novo</option>
                                    <option value="usado">usado</option>
                                </Select>
                            </FormControl>

                            <span className="about-frete">Frete calculado em <a href="#" className="text-yellow">Melhor envio</a> Clique <a href="#" className="text-yellow">aqui</a> e saiba mais</span>
                        
                            <FormControlLabel control={<Checkbox />} label={<span>Eu concordo com os <a href="#" className="text-pink">termos e condições</a></span>} />
                        
                            <button className="btn-solicitar-frete">Solicitar frete</button>

                            <div className="imgs-parceiros"> 
                                <img src={LogoMelhorEnvio} height={40}/>
                                <img src={LogoApadrinheme} height={40}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApoioMaterial;