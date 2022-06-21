const express = require("express");
const app = express();
const mysql = require("mysql1");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "passoword",
    database: "banco",
});

app.get('/', (req, res) => {
    db.query("INSERT INTO usuarios (email, senha) VALUES( 'cristianferreira@gmail.com', '1234567')")
})


app.listen(3001, () => {
    console.log("rodando na portan 3001");
});1