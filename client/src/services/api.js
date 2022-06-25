import Axios from "axios";

//Nesse arquivo ficarão todas as APIs que quisermos consumir

//configs do axios
Axios.defaults.withCredentials = true;

const ApiCorreios = Axios.create({
    baseURL: "https://viacep.com.br"
});

const MyServer = Axios.create({
    baseURL: "http://localhost:3001"
});

export {ApiCorreios, MyServer};