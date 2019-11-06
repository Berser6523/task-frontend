const INTIAL_STATE = {
    modal_project: false,
    modal_tasks: {},
    editProject: {},
    editTask: {},
    toggleAddAndEdit: ''
}

export default function Projects(state = INTIAL_STATE, action){
    switch(action.type){
        
        case 'CLOSE_MODAL_PROJECT':
            return { ...state, modal_project: action.modal }

        case 'EDIT_MODAL_PROJECT':
            return { ...state, modal_project: true, editProject: action.payload }

        case 'EDIT_MODAL_TASK':
            return { ...state, modal_tasks: action.payload}
        
        case 'MODAL_TASK_TOGGLE':
            return { ...state, modal_tasks: action.payload}
        
        
        default:
            return state;
    }
}
