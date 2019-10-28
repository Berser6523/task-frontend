const INTIAL_STATE = {
    modal_project: false,

}

export default function Projects(state = INTIAL_STATE, action){
    
    switch(action.type){
        case 'MODAL_PROJECT':
            return { modal_project: action.modal }
        default:
            return state;
    }
}
