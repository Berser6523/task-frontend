import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

// api.defaults.headers.authorization = `Bearer ola`  


export const setToken = (token) => {
    api.interceptors.request.use(function(config){
        
        config.headers.authorization = `Bearer ${token}`  
        return config
    })
}