import React, { useState } from "react";
import "./ApoioEducacional.css";
import LogoEducacional from "../../../../media/Imagens_pop-up/icon_cadastro-09.svg"

import ProfPicture from "../../profPicture/ProfPicture";
import QrCode from "../../../../media/payment/qr-code-pic.png"
import ApadrinhemeLogo from "../../../../media/logo/logo-tipo-and-icon.svg"

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

const ApoioDoacao = props => {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [doacaoPersonalizada, setDoacaoPersonalizada] = useState(0);
    const [validadeCartao, setValidadeCartao] = useState(null)

    const [nomeCurso, setNomeCurso] = useState('Bacharel Sistemas da informação');
    const [duracaoCurso, setDuracaoCurso] = useState('4 anos');
    const [mensalidadeCurso, setMensalidadeCurso] = useState('R$ 1000');

    const [cobertura, setCobertura] = useState('');
    const handleChangeCob = (event) => {
        setCobertura(event.target.value);
    };

    return (
        <>

            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>
            <div className="ApoioDoacao">
                <div className="header">
                    <div className="nome-apoio">
                        <img src={LogoEducacional} alt="dinheiro e raio" height={80} />
                        <h3>Apadrinhamento Educacional</h3>
                    </div>

                    <div className="quem-apoia">
                        <ProfPicture src={props.fotoJovem} scale={60} />
                        <div className="apoiado-nome">
                            <strong>{props.nomeJovem}</strong>
                            <span className="aspiracao">{props.aspiracaoJovem}</span>
                        </div>
                    </div>
                </div>

                <div className="pagamento-info">
                    <div className="nome-email">
                        <TextField id="nome-pagador" label="Nome do curso" variant="outlined" fullWidth value={nomeCurso} InputProps={{ readOnly: true, }} />
                        <TextField id="email-pagador" label="Duração" variant="outlined" fullWidth value={duracaoCurso} readOnly InputProps={{ readOnly: true, }} />
                        <TextField id="email-pagador" label="Mensalidade" variant="outlined" fullWidth value={mensalidadeCurso} readOnly InputProps={{ readOnly: true, }} />

                    </div>
                    <br />
                    <div className="d-flex">
                        <div className="flex-1">
                            <HtmlTooltip sx={{ zIndex: 9999999 }}
                                title={
                                    <>
                                        <span>Quantas mensalidades desse jovem você deseja cobrir? </span>
                                        <strong>{"(isso se refere à quantos meses você vai ajudar pagando esse jovem)"}</strong>
                                    </>
                                }
                            >
                                <FormControl className="myselect" fullWidth>
                                    <InputLabel htmlFor="demo-dialog-native">Cobertura - mensalidade</InputLabel>
                                    <Select
                                        native
                                        value={cobertura}
                                        onChange={handleChangeCob}
                                        input={<OutlinedInput label="Cobertura - mensalidade" id="demo-dialog-native" />}
                                    >
                                        <option className="selectCoberturaMes" value={1}>1 mês de apoio</option>
                                        <option value={2}>2 mês de apoio</option>
                                        <option value={3}>3 mês de apoio</option>
                                        <option value={4}>4 mês de apoio</option>
                                        <option value={5}>5 mês de apoio</option>
                                        <option value={6}>6 mês de apoio</option>
                                    </Select>
                                </FormControl>
                            </HtmlTooltip>
                        </div>

                        <div className="flex-1">
                            <HtmlTooltip sx={{ zIndex: 9999999 }}
                                title={
                                    <>
                                        <span>Com quanto você quer apoiar por mês? </span>
                                        <strong>{"(isso se refere à quanto dinheiro você depositará todo mês)"}</strong>
                                    </>
                                }
                            >
                                <TextField label="Cobertura - valor" variant="outlined" fullWidth />
                            </HtmlTooltip>
                        </div>

                    </div>


                    <br />

                    <h3>Status do apadrinhamento</h3>
                    <div className="status">
                        <div className="porcentagemContribuiram">50%</div>
                        <div className="porcentagemUsuarioContribuira">10%</div>
                    </div >
                    <div className="legendaBarra">
                        <div className="legendaItem"> <div className="legendaCor azul"></div> <small>Quanto já contribuiram com esse jovem</small> </div>
                        <div className="legendaItem"> <div className="legendaCor rosa"></div> <small>Quanto você contribuirá</small> </div>
                    </div>
                    <FormControlLabel control={<Checkbox />} label={<span>Quero receber <Link to="/" className="link-termos">Relatórios Periodicos</Link> referente ao desempenho do jovem via e-mail</span>} />

                    <strong>Método de pagamento</strong>
                    <div className="metodo-pagamento">
                        <div className="payment-methods">
                            <ThemeProvider theme={lightTheme}>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <div className="flex-col">
                                            <label className="cartao-infos" htmlFor="select-credit-card">
                                                <div className="d-flex">
                                                    <i className="bi bi-credit-card-fill"></i>
                                                    <span>Cartão de crédito</span>
                                                    <Radio
                                                        value="cartao"
                                                        name="payment-method"
                                                        inputProps={{ 'aria-label': 'cartao' }}
                                                        id="select-credit-card"
                                                        sx={{
                                                            color: "#ff00d5", '&.Mui-checked': {
                                                                color: "#ff00d5"
                                                            }, marginLeft: "auto"
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex-col">
                                                    <TextField label="Nome do titular" variant="outlined" fullWidth />
                                                    <TextField label="Número do cartão" variant="outlined" fullWidth />
                                                    <div className="d-flex">
                                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                            <DatePicker
                                                                label="Validade"
                                                                views={['day', 'month', 'year']}
                                                                inputFormat="dd/mm/yyyy"
                                                                value={validadeCartao}
                                                                onChange={newValue => setValidadeCartao(newValue)}
                                                                renderInput={(params) => <TextField fullWidth variant="outlined" required {...params} sx={{ width: "65%", marginLeft: "auto" }} />}
                                                            />
                                                        </LocalizationProvider>
                                                        <TextField label="CVV" variant="outlined" sx={{ width: "35%" }} />
                                                    </div>
                                                </div>
                                            </label>
                                            <label className="pix-info" htmlFor="select-credit-pix">
                                                <div className="d-flex">
                                                    <i className="bi bi-wallet"></i>
                                                    <span>PIX</span>
                                                    <Radio
                                                        value="pix"
                                                        name="payment-method"
                                                        inputProps={{ 'aria-label': 'pix' }}
                                                        id="select-credit-pix"
                                                        sx={{
                                                            color: "#ff00d5", '&.Mui-checked': {
                                                                color: "#ff00d5",
                                                            }, marginLeft: "auto"
                                                        }}
                                                    />
                                                </div>
                                                <div className="d-flex justify-center">
                                                    <img src={QrCode} alt="qr-code" height={120} />
                                                </div>
                                            </label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                            </ThemeProvider>
                        </div>

                        <div className="confirm-payment">
                            <FormControlLabel control={<Checkbox />} label={<span>Eu concordo com os <Link to="/" className="link-termos">Termos e Condições</Link></span>} />
                            <button className="btn-finalizar-pagamento">Apadrinhar!</button>
                        </div>
                    </div>

                    <div className="d-flex justify-between">
                        <div className="d-flex">
                            <i className="bi bi-shield-fill-check"></i>
                            <p>
                                pagamento <br />
                                100% seguro
                            </p>
                        </div>
                        <img src={ApadrinhemeLogo} height={36} alt="Logo plataforma" />
                    </div>
                </div >
            </div >
        </>
    );
}

export default ApoioDoacao;
{/*import React from "react";
import "./ApoioEducacional.css";
import LogoEducacional from "../../../../media/icons/IconsApoios/educacional.svg"

const ApoioEducacional = props => {
    return(
        <>
            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>

            <div className="ApoioApadrinhar border">
                <img src={LogoEducacional} alt="" />
                <h1>Educacional</h1>
            </div>
        </>
    );
}

export default ApoioEducacional;
*/}