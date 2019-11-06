const CLOSE_MODAL_PROJECT = 'CLOSE_MODAL_PROJECT'
const EDIT_MODAL_PROJECT = 'EDIT_MODAL_PROJECT'
const MODAL_TASK_TOGGLE = 'MODAL_TASK_TOGGLE'
const EDIT_MODAL_TASK = 'EDIT_MODAL_TASK'
const MODAL_TOGGLE_ADD_EDIT = 'MODAL_TOGGLE_ADD_EDIT'

export function closeModalProjct(modal){
    return {
        type: CLOSE_MODAL_PROJECT,
        modal
    }
}

export function editarModal(project){
    return{
        type: EDIT_MODAL_PROJECT,
        payload:{
            ...project
        }
    }
}



export function toggleModalTask(modal, acao){    
    return {
        type: MODAL_TASK_TOGGLE,
        payload:{
            modal,
            acao
        }
    }
}

export function editModalTask(task, modal, acao){
    return{
        type: EDIT_MODAL_TASK,
        payload:{
            ...task,
            modal,
            acao
        }
    }
}

export function toggleAddEdit(toggle){
    return {
        type: MODAL_TOGGLE_ADD_EDIT,
        toggle
    }
}