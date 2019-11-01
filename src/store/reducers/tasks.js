const INTIAL_STATE = {
    users: [],
    loading: false,
    error: false,
    filtro: '',
}

export default function Users(state = INTIAL_STATE, action){
    
    switch(action.type){
        case 'REQUEST_USERS':
            return {...state, loading:true} 
            
        case 'SUCCESS_USERS_LIST':                
            return { users: action.data, loading: false, error: false }

        case 'FAILUIRE_USERS_LIST':
            return { users: [], loading: false, error: true }

        default:
            return state
    }
}
