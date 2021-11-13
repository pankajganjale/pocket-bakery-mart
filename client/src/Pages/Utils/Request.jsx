import axios from "axios";

const RequestCake = axios.create({
    baseURL: "http://localhost:1234"
})

export { RequestCake };