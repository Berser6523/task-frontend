const CLOSE_MODAL_PROJECT = 'CLOSE_MODAL_PROJECT'
const EDIT_MODAL_PROJECT = 'EDIT_MODAL_PROJECT';
const MODAL_TASK_TOGGLE = 'MODAL_TASK_TOGGLE';

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

export function toggleModalTask(modal){    
    return {
        type: MODAL_TASK_TOGGLE,
        modal,
    }
}