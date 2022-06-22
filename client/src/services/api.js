import axios from "axios";

//Nesse arquivo ficarão todas as APIs que quisermos consumir

const ApiCorreios = axios.create({
    baseURL: "https://viacep.com.br"
})

export {ApiCorreios}