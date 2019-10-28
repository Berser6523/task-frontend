const INTIAL_STATE = {
    projects: [],
    loading: false,
    error: false,
    filtro: '',
}

export default function Projects(state = INTIAL_STATE, action){
    
    switch(action.type){
        case 'REQUEST_PROJECTS':
            return {...state, loading:true}

        case 'SUCCESS_PROJECTS_LIST':                
            return { projects: action.data, loading: false, error: false }

        case 'FAILUIRE_PROJECTS_LIST':
            return { projects: [], loading: false, error: true }


        case 'REQUEST_ADD_PROJECTS':
            return { ...state, loading: true }
        
        case 'ADD_PROJECTS':
            return {...state, projects: [...state.projects, action.data]}

        default:
            return state
    }
}
