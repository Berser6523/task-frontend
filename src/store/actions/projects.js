const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
const REQUEST_ADD_PROJECTS = 'REQUEST_ADD_PROJECTS'

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