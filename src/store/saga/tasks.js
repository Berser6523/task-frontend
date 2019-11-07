import { put, call } from 'redux-saga/effects'

import { api } from '../../services/api'


async function requestTask(){
    const response = await api.get('/task')   
    return response.data
}

export function* getTask(){
    
    try{
        const response = yield call(requestTask)
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

    return response.data.task
}

export function* addTask({payload}){
    
    try{
        const response = yield call(requestAddTask, payload)
        yield put({ type: 'SUCCESS_TASK_LIST', data: response})
        yield put({ type: 'MODAL_TASK_TOGGLE', payload: { modal: false, acao: ''} })
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_TASK_LIST'})
    }
}


async function requestEditTask({ task }){
    const { _id, ...rest } = task

    const response = await api.put(`/task/${_id}`,{
                ...rest
            })    

    return response.data.task
}

export function* editTask({payload}){
    
    try{
        const response = yield call(requestEditTask, payload)
        yield put({ type: 'SUCCESS_TASK_LIST', data: response})
        yield put({ type: 'MODAL_TASK_TOGGLE', payload: { modal: false, acao: ''} })
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_TASK_LIST'})
    }
}