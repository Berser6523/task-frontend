const INTIAL_STATE = {
    modal_project: false,
    editProject: {},
}

export default function Projects(state = INTIAL_STATE, action){
    switch(action.type){
        case 'CLOSE_MODAL_PROJECT':
            return {editProject: {} , modal_project: action.modal }

        case 'EDIT_MODAL_PROJECT':
            
            return {modal_project: true, editProject: action.payload }
        default:
            return state;
    }
}
