import { setToken } from '../services/api'

export function authenticate (token){
    setToken(token)
}

export function formatDate(date){
    let data = new Date(date);
    data =  data.getFullYear()+'-' + (data.getMonth()+1) + '-'+data.getDate();
    return data.split('-').reverse().join('.')
}