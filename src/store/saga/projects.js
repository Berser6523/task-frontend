import { put, call } from 'redux-saga/effects'

import { api } from '../../services/api'

async function apiGet(){
    const response = await api.get('/projects')    
    return response.data
}

export function* getProjects(){
    
    try{
        const response = yield call(apiGet)
        yield put({ type: 'SUCCESS_PROJECTS_LIST', data: response, filtro:""})
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_PROJECTS_LIST', filtro:""})
    }
}

async function requestAddProject({ value }){
    const { description, title} = value
    const response = await api.post('/projects', {
        description,
        title
    })

    return response.data
}

export function* addProject({payload}){
    
    try{
        const response = yield call(requestAddProject, payload)
        yield put({ type: 'ADD_PROJECTS', data: response.project})
        yield put({ type: 'MODAL_PROJECT_TOGGLE', payload: { modal: false, acao: ''} })
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_PROJECTS_LIST', error: true})
    }
}

async function requestEditProject({ value }){
    const { description, title, _id} = value

    const response = await api.put(`/projects/${_id}`, {
        description,
        title
    })

    return response.data
}

export function* editProject({payload}){
    try{
        const response = yield call(requestEditProject, payload)
        yield put({ type: 'EDIT_PROJECT', data: response.project})
        yield put({ type: 'MODAL_PROJECT_TOGGLE', payload: { modal: false, acao: ''} })
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_PROJECTS_LIST', error: true})
    }
}

async function requestDeleteProject(id){
    await api.delete(`/projects/${id}`)
}

export function* deleteProject({ id }){
    try{
        yield call(requestDeleteProject, id)
        yield put({ type: 'DELET_PROJECT', data: { id }})
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_PROJECTS_LIST', error: true})
    }
}