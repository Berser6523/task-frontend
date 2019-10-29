const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
const REQUEST_ADD_PROJECTS = 'REQUEST_ADD_PROJECTS'
const REQUEST_EDIT_PROJECTS = 'REQUEST_EDIT_PROJECTS'
const REQUEST_DELETE_PROJECT = 'REQUEST_DELETE_PROJECT'

export function requestProjects(){
    return{
        type: REQUEST_PROJECTS
    }
}

export function addProjeto(value){
    return{
        type: REQUEST_ADD_PROJECTS,
        payload: {
            value
        }
    }
}

export function editProjeto(value){
    
    return{
        type: REQUEST_EDIT_PROJECTS,
        payload: {
            value
        }
    }
}

export function deleteProject(id){
    return {
        type: REQUEST_DELETE_PROJECT,
        id
    }
}