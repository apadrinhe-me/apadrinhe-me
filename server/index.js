const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "apadrinhe_me",
});

app.get('/', (req, res) => {
    db.query(
        "INSERT INTO usuarios ( email_usuario, senha_usuario, nome_completo_usuario, nickname_usuario, data_nasc_usuario, genero_usuario, confirmacao_responsavel, confirmacao_usuario, renda_familiar) VALUES('cristianferreira@gmail.com', '1234567', 'cris', 'cris123', '08/03/2003', 'masculino','sim', 'sim', '1000')", (err, result) => {if(err) {console.log(err)}
    }
    );
});


app.listen(3001, () => {
    console.log("rodando na portan 3001");
}); 
