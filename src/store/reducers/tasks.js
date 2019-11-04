const INTIAL_STATE = {
    tasks: [],
    loading: false,
    error: false,
    filtro: '',
}

export default function Task(state = INTIAL_STATE, action){
    
    switch(action.type){
        case 'REQUEST_TASK':
            return {...state, loading:true} 
            
        case 'SUCCESS_TASK_LIST':  
            return {...state, tasks: action.data, loading: false, error: false }

        case 'FAILUIRE_TASK_LIST':
            return {...state, tasks: [], loading: false, error: true }
        

        case 'REQUEST_ADD_TASK':
            return {...state, loading:true} 
        
        case 'SUCCESS_REQUEST_ADD':                
            return {...state, loading: false, error: false }

        case 'FAILURE_REQUEST_ADD':                
            return {...state, loading: false, error: true }    

        default:
            return state
    }
}
