import Axios from "axios";

//Nesse arquivo ficarão todas as APIs que quisermos consumir



const ApiCorreios = Axios.create({
    baseURL: "https://viacep.com.br"
});

const MyServer = Axios.create({
    //configs do axios
    withCredentials: true,
    baseURL: "http://localhost:3001"
});

export {ApiCorreios, MyServer};