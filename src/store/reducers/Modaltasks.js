const INTIAL_STATE = {
    modal_tasks: false,
    editTask: {},
}

export default function ModalTask(state = INTIAL_STATE, action){
    switch(action.type){
        case 'CLOSE_MODAL_TASKS': 
            
            console.log(action.modal)
            return { modal_tasks: action.modal, }

        default:
            return state;
    }
}
