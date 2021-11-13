import axios from "axios";

const RequestCake = axios.create({
    baseURL: "http://localhost:3001"
})

export { RequestCake };