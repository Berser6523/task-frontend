const MODAL_PROJECT_TOGGLE = 'MODAL_PROJECT_TOGGLE'
const EDIT_MODAL_PROJECT = 'EDIT_MODAL_PROJECT'
const MODAL_TASK_TOGGLE = 'MODAL_TASK_TOGGLE'
const EDIT_MODAL_TASK = 'EDIT_MODAL_TASK'

export function toggleModalProjct(modal, acao){
    return {
        type: MODAL_PROJECT_TOGGLE,
        payload:{
            modal,
            acao,
        }
    }
}

export function editarModal(project, modal, acao){
    return{
        type: EDIT_MODAL_PROJECT,
        payload:{
            ...project,
            modal,
            acao
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

