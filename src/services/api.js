import axios from "axios";
import { persistor } from '../store'


export const api = axios.create({
    baseURL: "http://localhost:3333"
})

const errorHandler = (error) => {
    
    if(error.response.status === 401){
         persistor.purge()  
         console.log('aqui')
         window.location.reload()
    }

    
    return Promise.reject({ ...error })
}

const successHandler = (response) => {
    // console.log(response)
    return response
}

api.interceptors.response.use( 
    response =>  successHandler(response),
    error =>  errorHandler(error)
)

export const setToken = (token) => {
    api.interceptors.request.use(function(config){
        
        config.headers.authorization = `Bearer ${token}`  
        return config
    })
}