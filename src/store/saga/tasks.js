import { put, call } from 'redux-saga/effects'

import { api } from '../../services/api'


async function requestUsers(){
    const response = await api.get('/users')    
    return response.data
}

export function* getUsers(){
    
    try{
        const response = yield call(requestUsers)
        yield put({ type: 'SUCCESS_USERS_LIST', data: response})
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_USERS_LIST'})
    }
}

