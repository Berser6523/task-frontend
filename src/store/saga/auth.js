import { put, call } from 'redux-saga/effects'


import { api, setToken } from '../../services/api'

async function request_auth(email, password){
    const response = await api.post('/register',{
        email,
        password
    })

    return response.data.token
}


export function* auth({ email, password }){
    
    try{
        const response = yield call(request_auth, email,password)    
        yield setToken(response)  
        yield put({ type: 'SUCCESS_AUTH', token: response})
    }catch(err){
        console.log(err)
        yield put({ type: 'FALIURE_AUTH'})
    }
}
