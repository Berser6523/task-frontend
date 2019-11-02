import { put, call } from 'redux-saga/effects'

import { api } from '../../services/api'


async function requesttASK(){
    const response = await api.get('/task')    
    return response.data
}

export function* getTask(){
    
    try{
        const response = yield call(requesttASK)
        yield put({ type: 'SUCCESS_TASK_LIST', data: response})
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_TASK_LIST'})
    }
}


async function requestAddTask(payload){

    const dados = payload.task

    const response = await api.post('/task', {
        ...dados
    })    

    return response.data
}

export function* addTask({payload}){
    
    try{
        const response = yield call(requestAddTask, payload)
        // yield put({ type: 'SUCCESS_USERS_LIST', data: response})
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_TASK_LIST'})
    }
}