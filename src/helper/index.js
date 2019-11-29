import { setToken } from '../services/api'

export function authenticate (token, cb){
    setToken(token)
}

export function formatDate(date){
    let data = new Date(date);
    data =  data.getFullYear()+'-' + (data.getMonth()+1) + '-'+data.getDate();
    return data.split('-').reverse().join('.')
}

export function setValueSelect(config, objs){
    const values =[]
    
    let value = config[0]
    let label = config[1]
    
    objs.map(obj => values.push({ 
        value: obj[value],
        label: obj[label]
    }))

    return values
}