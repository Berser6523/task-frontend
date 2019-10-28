const INTIAL_STATE = {
    people: [],
    loading: false,
    error: false,
    filtro: '',
}

export default function People(state = INTIAL_STATE, action){
    switch(action.type){
        case 'REQUEST_PEOPLE':
            return {...state, loading:true}

        case 'SUCCESS_PEOPLE_LIST':
            return { people: action.data, loading: false, error: false }


        case 'FILTRO':
            return Object.assign({}, state, {filtro: action.value})

        default:
            return state
    }
}
