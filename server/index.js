const express = require("express");
const app = express(); //executar o express

//configurando o banco de dados
const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "apadrinhe_me"
})

//Caso dê erro com o fornt conextando com o back
const cors = require("cors");
app.use(cors());

//passando os dados do front pro backend
app.use(express.json());

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

    //Validação de dados por parte do backend
    //...

    //Mandar o email para o responsável e para o usuário, para assim confirmar seu login

    console.log(userInfo);
    console.log(locationInfo);
    console.log(parentInfo);

    //mandando para o banco de dados
    let sql;

    //dados do usuário
    sql = `INSERT INTO usuarios(email_usuario, senha_usuario, tipo_usuario, nome_completo_usuario, nickname_usuario, cpf_usuario, data_nasc_usuario, genero_usuario, renda_familiar) value ('${userInfo.email_usuario}', '${userInfo.senha_usuario}', '${tipoUser}', '${userInfo.nome_completo_usuario}', '${userInfo.nickname_usuario}', '${userInfo.cpf_usuario}', '${dataNasc}', '${userInfo.genero_usuario}', '${userInfo.renda}')`;

    db.query(sql, (err, result) => {
        console.log(err)
    })

    //Pegar o id do usuário atual criado
    sql = "SELECT MAX(id_usuario) as maxId FROM usuarios";
    db.query(sql, (err, result) => {
        let lastId = result[0].maxId;
        console.log(lastId);

        //dados da localização do usuário
        sql = `INSERT INTO usuarios_localizacao(id_usuario, cep, uf, cidade, bairro, rua, numero, complemento) value (${lastId}, '${locationInfo.cep}', '${locationInfo.uf}', '${locationInfo.cidade}', '${locationInfo.bairro}', '${locationInfo.rua}','${locationInfo.numero}', '${locationInfo.complemento === "" ? null : locationInfo.complemento}')`;

        db.query(sql, (err, result) => {
            console.log(err)
        })

        if(idadeUser < 18){
            sql = `INSERT INTO usuarios_responsavel(id_usuario, cpf_responsavel, nome_responsavel, data_nasc_responsavel, email) value (${lastId}, '${parentInfo.cpf_responsavel}', '${parentInfo.nome_responsavel}', '${parentInfo.data_nasc_responsavel}', '${parentInfo.email_responsavel}')`;
            db.query(sql, (err, result) => {
                console.log(err)
            })
        }
    })
})

//porta do server
app.listen(3001, () => {
    console.log("rodando servidor");
})