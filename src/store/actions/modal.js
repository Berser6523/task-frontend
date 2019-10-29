const CLOSE_MODAL_PROJECT = 'CLOSE_MODAL_PROJECT'
const EDIT_MODAL_PROJECT = 'EDIT_MODAL_PROJECT';

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