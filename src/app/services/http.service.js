import axios from "axios";
import logger from "./log.service"
import { toast } from "react-toastify"

axios.interceptors.response.use((res)=>res, function (error) {
    const expectedErrors = 
        error.response &&
        error.response.status >=400 &&
        error.response.status < 500;
     if (!expectedErrors){
        logger.log(error);
        toast.error("Что то пошло не так")
     }
     return Promise.reject(error)
})

const httpService= {
    get:axios.get,
    post:axios.post,
    put:axios.put, 
    delete:axios.delete
}

export default httpService;