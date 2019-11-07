const INTIAL_STATE = {
    modal_project: {},
    modal_tasks: {},
}

export default function Projects(state = INTIAL_STATE, action){
    switch(action.type){
        
        case 'MODAL_PROJECT_TOGGLE':
            return { ...state, modal_project: action.payload }

        case 'EDIT_MODAL_PROJECT':
            return { ...state, modal_project: action.payload  }

        case 'EDIT_MODAL_TASK':
            return { ...state, modal_tasks: action.payload}
        
        case 'MODAL_TASK_TOGGLE':
            return { ...state, modal_tasks: action.payload}
        
        
        default:
            return state;
    }
}
