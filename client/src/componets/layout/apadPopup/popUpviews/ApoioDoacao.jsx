import React, {useState} from "react";
import "./ApoioDoacao.css";
import LogoDoacao from "../../../../media/icons/IconsApoios/fast_donate.svg"
import ProfPicture from "../../profPicture/ProfPicture";
import QrCode from "../../../../media/payment/qr-code-pic.png"
import ApadrinhemeLogo from "../../../../media/logo/logo-tipo-and-icon.svg"

import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const ApoioDoacao = props => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [doacaoPersonalizada, setDoacaoPersonalizada] = useState(0);
    const [validadeCartao, setValidadeCartao] = useState(null)

    return(
        <>
            <button className="btn-format btn-return" onClick={() => props.setSelectedApoio(0)}><i className="bi bi-arrow-return-left"></i> Voltar</button>
            <div className="ApoioDoacao">
                <div className="header">
                    <div className="nome-apoio">
                        <img src={LogoDoacao} alt="dinheiro e raio" height={80}/>
                        <h3>Apadrinhamento financeiro</h3>
                    </div>

                    <div className="quem-apoia">
                        <ProfPicture src="valentina.png" scale={60} />
                        <div className="apoiado-nome">
                            <strong>Valentina</strong>
                            <span className="aspiracao">Aspirante a desenvolvedora web</span>
                        </div>
                    </div>
                </div>

                <div className="pagamento-info">
                    <div className="nome-email">
                        <TextField id="nome-pagador" label="Nome" variant="outlined" fullWidth/>
                        <TextField id="email-pagador" label="email" variant="outlined" fullWidth/>
                    </div>

                    <div className="valor-doacao">
                        <strong>Selecione o valor que deseja doar ou personalize</strong>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            sx={{justifyContent: "center"}}
                        >
                            <ToggleButton value={10}>R$10</ToggleButton>
                            <ToggleButton value={20}>R$20</ToggleButton>
                            <ToggleButton value={50}>R$50</ToggleButton>
                            <ToggleButton value={100}>R$100</ToggleButton>
                            <ToggleButton value={doacaoPersonalizada}><TextField size="small" label="outro preço" variant="outlined" onChange={e => setDoacaoPersonalizada(e.target.value)}/></ToggleButton>
                        </ToggleButtonGroup>
                    </div>

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
                                                        sx={{color: "#ff00d5", '&.Mui-checked': {
                                                                color: "#ff00d5"
                                                            }, marginLeft: "auto"}}
                                                    />
                                                </div>
                                                <div className="flex-col">
                                                    <TextField label="Nome do titular" variant="outlined" fullWidth/>
                                                    <TextField label="Número do cartão" variant="outlined" fullWidth/>
                                                    <div className="d-flex">
                                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                            <DatePicker
                                                                label="Validade"
                                                                views={['day', 'month', 'year']}
                                                                inputFormat="dd/mm/yyyy"
                                                                value={validadeCartao}
                                                                onChange={newValue => setValidadeCartao(newValue)}
                                                                renderInput={(params) => <TextField fullWidth variant="outlined" required {...params} sx={{width: "65%", marginLeft: "auto"}}/>}
                                                            />
                                                        </LocalizationProvider>
                                                        <TextField label="CVV" variant="outlined" sx={{width: "35%"}}/>
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
                                                        sx={{color: "#ff00d5", '&.Mui-checked': {
                                                                color: "#ff00d5",
                                                            }, marginLeft: "auto"}}
                                                    />
                                                </div>
                                                <div className="d-flex justify-center">
                                                    <img src={QrCode} alt="qr-code" height={120}/>
                                                </div>
                                            </label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                            </ThemeProvider>
                        </div>

                        <div className="confirm-payment">
                            <FormControlLabel control={<Checkbox />} label={<span>Eu concordo com os <Link to="/" className="link-termos">termos e condições</Link></span>} />
                            <button className="btn-finalizar-pagamento">Finalizar</button>
                        </div>
                    </div>

                    <div className="d-flex justify-between">
                        <div className="d-flex">
                            <i className="bi bi-shield-fill-check"></i>
                            <p>
                                pagamento <br/>
                                100% seguro
                            </p>
                        </div>
                        <img src={ApadrinhemeLogo} height={36} alt="Logo plataforma"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApoioDoacao;