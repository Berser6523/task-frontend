import { purgeStoredState } from 'redux-persist'

const INTIAL_STATE = {
    loading: false,
    error: false,
    token: '',
    authenticate: false,
}

export default function People(state = INTIAL_STATE, action){
    switch(action.type){
        case 'REQUEST_AUTH':
            return { loading: true }

        case 'SUCCESS_AUTH':
            return { token: action.token, authenticate: true }

        case 'FALIURE_AUTH':
            return { token: [], loading: false, error: true }

        case 'TOKEN_CLEAR':
            
            purgeStoredState().purge()
            return state;

        default:
            return state
    }
}
