const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt")
const saltRounds = 10
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express(); //executar o express

//configurando o banco de dados
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "apadrinhe_me"
})

//Caso dê erro com o fornt conextando com o back
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

//passando os dados do front pro backend
app.use(express.json());

//habilitando para usar cookies
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

//iniciar session
app.use(session({
    key: "userId",
    secret: "apadrinhemeoficial",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 30 //1 mês
    }
}))

app.post("/register", (req, res) => {
    //entra pelo request, sai pelo result

    //Separando os objetos da requisição
    const { userInfo } = req.body;
    const { locationInfo } = req.body;
    const { parentInfo } = req.body;

    //Montando a data
    let date = new Date(userInfo.data_nasc_usuario);
    let dataNasc = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    //Tipo do usuário em número
    let tipoUser;
    if(userInfo.tipo_usuario === "apadrinhar"){
        tipoUser = 1;
    } else if(userInfo.tipo_usuario === "ser_apadrinhado"){
        tipoUser = 2;
    } else {
        tipoUser = 0;
    }

    //idade do usuario
    let hoje = new Date();
    let idadeUser = hoje.getFullYear() - date.getFullYear()

    //Validação de dados por parte do backend (mesmas do front)
    //Não pode cadastrar email repetido
    //Não pode SQL injection
    //...

    //Mandar o email para o responsável e para o usuário, para assim confirmar seu login

    let sql;

    //Verificando se há email ou cpf já cadastrado
    sql = "SELECT id_usuario, email_usuario, cpf_usuario from USUARIOS WHERE email_usuario = ? OR cpf_usuario = ?"
    db.query(sql, [userInfo.email_usuario, userInfo.cpf_usuario], (err, result) => {
        if(err){
            res.send({cadastrado: false, err:err, msg:"Erro ao te cadastrar. Tente novamente mais tarde"})
        } else if(result.length > 0){
            res.send({cadastrado: false, err:err, msg:"O email ou cpf cadastrado já tem login na plataforma. Tente fazer Login."})
        } else {
            //mandando para o banco de dados

            //criptografando senha do usuário
            bcrypt.hash(userInfo.senha_usuario, saltRounds, (crypterr, hash) => {
                //dados do usuário
                sql = `INSERT INTO usuarios(email_usuario, senha_usuario, tipo_usuario, nome_completo_usuario, nickname_usuario, cpf_usuario, data_nasc_usuario, genero_usuario, renda_familiar) value ('${userInfo.email_usuario}', '${hash}', '${tipoUser}', '${userInfo.nome_completo_usuario}', '${userInfo.nickname_usuario}', '${userInfo.cpf_usuario}', '${dataNasc}', '${userInfo.genero_usuario}', '${userInfo.renda}')`;

                db.query(sql, (err, result) => {
                    if(err){
                        res.send({cadastrado: false, err:err, msg: "Erro ao te cadastrar. Tente novamente mais tarde"})
                    } else {
                        //Pegar o id do usuário atual criado
                        sql = "SELECT MAX(id_usuario) as maxId FROM usuarios";
                        db.query(sql, (err, result) => {
                            let {maxId} = result[0];

                            //dados da localização do usuário
                            sql = `INSERT INTO usuarios_localizacao(id_usuario, cep, uf, cidade, bairro, rua, numero, complemento) value (${maxId}, '${locationInfo.cep}', '${locationInfo.uf}', '${locationInfo.cidade}', '${locationInfo.bairro}', '${locationInfo.rua}','${locationInfo.numero}', '${locationInfo.complemento === "" ? null : locationInfo.complemento}')`;

                            db.query(sql, (err, result) => {
                                if(err){
                                    res.send({cadastrado: false, err:err, msg: "Erro ao te cadastrar. Tente novamente mais tarde"})
                                } else {
                                    if(idadeUser < 18){
                                        sql = `INSERT INTO usuarios_responsavel(id_usuario, cpf_responsavel, nome_responsavel, data_nasc_responsavel, email) value (${maxId}, '${parentInfo.cpf_responsavel}', '${parentInfo.nome_responsavel}', '${parentInfo.data_nasc_responsavel}', '${parentInfo.email_responsavel}')`;
                                        db.query(sql, (err, result) => {
                                            if(err){
                                                res.send({cadastrado: false, err:err, msg: "Erro ao te cadastrar. Tente novamente mais tarde"})
                                            } else {
                                                res.send({cadastrado: true, msg: "Cadastro efetuado com sucesso"});
                                            }
                                        })
                                    } else {
                                        res.send({cadastrado: true, msg: "Cadastro efetuado com sucesso"});
                                    }
                                }
                            })
                        })
                    }
                })
            })
        }
    })
})

app.post("/login", (req, res) => {
    const {email} = req.body;
    const {senha} = req.body;

    let query = "SELECT id_usuario, email_usuario, senha_usuario, tipo_usuario, nome_completo_usuario, foto_usuario, aspiracao_usuario FROM USUARIOS WHERE email_usuario = ?";
    db.query(query, [email], (err, result) => {
        if(err){
            res.send(err)
        } else if(result.length > 0){
            bcrypt.compare(senha, result[0].senha_usuario, (errCrpit, valid) => {
                if(valid){
                    //Usuário Logado
                    req.session.user = result[0];
                    res.send({logged: true, msg: "logado com sucesso"});
                } else {
                    res.send({logged: false, msg: "Senha incorreta"});
                }
            })
        } else {
            res.send({logged: false, msg: "Email não cadastrado"});
        }
    })
})

//Verificar se o usuário está logado (Session existe) e retornar os dados de login pra ele
app.get("/login", (req, res) => {
    if(req.session.user){
        res.send({logged: true, user: req.session.user})
    } else {
        res.send({logged: false})
    }
})

//logout
app.get("/logout", (req, res) => {
    req.session.destroy();
    return res.send();
})

//porta do server
app.listen(3001, () => {
    console.log("rodando servidor");
})
