import React from "react";
import "./RevisionCadastro.css"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";

const RevisionCadastro = props => {
    console.log(props)

    return (
        <div className="RevisionCadastro">
            <div className="return-previous-step">
                <button className="btn-format btn-return" onClick={() => props.setCadEtapa(4)}><i className="bi bi-arrow-return-left"></i> Voltar para etapa {props.cadEtapa}</button>
            </div>
            <div className="cad_msg">
                <span>Tudo certo com suas informações?</span>
                <span>Revise seu login, leia os termos e tudo pronto 😁</span>
            </div>
            <div className="revisar-info-cadastro">
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={2} align="center" sx={{}}><strong>Suas informações</strong></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Objetivo:</TableCell>
                                <TableCell>{props.cadastro.userInfo.tipo_usuario}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Nome:</TableCell>
                                <TableCell>{props.cadastro.userInfo.nome_completo_usuario}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">nickname:</TableCell>
                                <TableCell>{props.cadastro.userInfo.nickname_usuario}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">email:</TableCell>
                                <TableCell>{props.cadastro.userInfo.email_usuario}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">CPF:</TableCell>
                                <TableCell>{props.cadastro.userInfo.cpf_usuario}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Data de nascimento:</TableCell>
                                <TableCell>{props.cadastro.userInfo.data_nasc_usuario.getDate() + "/" + props.cadastro.userInfo.data_nasc_usuario.getMonth() + "/" + props.cadastro.userInfo.data_nasc_usuario.getFullYear()}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Gênero:</TableCell>
                                <TableCell>{props.cadastro.userInfo.genero_usuario}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell colSpan={2} align="center"><strong>Localização</strong></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">CEP:</TableCell>
                                <TableCell>{props.cadastro.locationInfo.cep}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">UF:</TableCell>
                                <TableCell>{props.cadastro.locationInfo.uf}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Cidade:</TableCell>
                                <TableCell>{props.cadastro.locationInfo.cidade}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Bairro:</TableCell>
                                <TableCell>{props.cadastro.locationInfo.bairro}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Rua:</TableCell>
                                <TableCell>{props.cadastro.locationInfo.rua}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Número:</TableCell>
                                <TableCell>{props.cadastro.locationInfo.numero}</TableCell>
                            </TableRow>
                            {props.cadastro.locationInfo.complemento != "" ?
                                <TableRow>
                                    <TableCell align="right">Complemento:</TableCell>
                                    <TableCell>{props.cadastro.locationInfo.genero_usuario}</TableCell>
                                </TableRow>
                                :
                                ""
                            }

                            {props.precisaResponsavel ?
                                <>
                                    <TableRow>
                                        <TableCell colSpan={2} align="center"><strong>Informações do responsável</strong></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Nome:</TableCell>
                                        <TableCell>{props.cadastro.parentInfo.nome_responsavel}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Email:</TableCell>
                                        <TableCell>{props.cadastro.parentInfo.email_responsavel}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Data de nascimento:</TableCell>
                                        <TableCell>{props.cadastro.parentInfo.data_nasc_responsavel.getDate() + "/" + props.cadastro.parentInfo.data_nasc_responsavel.getMonth() + "/" + props.cadastro.parentInfo.data_nasc_responsavel.getFullYear()}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">CPF:</TableCell>
                                        <TableCell>{props.cadastro.parentInfo.cpf_responsavel}</TableCell>
                                    </TableRow>
                                </>
                                :
                                ""
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className="confirm-terms-div">
                <Checkbox id="terms-of-use" checked={props.termosUso} onChange={e => props.setTermosUso(!props.termosUso)} /> <label htmlFor="terms-of-use">Concordo com os <Link to="#">termos da plataforma</Link></label>
            </div>

            <button className="continue-cad-btn" onClick={() => props.proximaEtapa(5)}>Tudo pronto</button>
        </div>
    );
}
export default RevisionCadastro;