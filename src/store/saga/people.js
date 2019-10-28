import { put, call } from 'redux-saga/effects'

import api from '../../services/api'

async function apiGet(){
    const response = await api.get('/?nat=br&results=30')

    return response.data.results
}


export function* getPeople(){
    try{
        const response = yield call(apiGet)
        yield put({ type: 'SUCCESS_PEOPLE_LIST', data: response, filtro:""})
    }catch(err){
        console.log(err)
        yield put({ type: 'FAILUIRE_PEOPLE_LIST', filtro:""})
    }
}
