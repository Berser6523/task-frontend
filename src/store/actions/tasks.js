const REQUEST_TASK = 'REQUEST_TASK'
const REQUEST_ADD_TASK = 'REQUEST_ADD_TASK'
const REQUEST_EDIT_TASK = 'REQUEST_EDIT_TASK'
const ADD_TASK_SOCKET_IO = 'ADD_TASK_SOCKET_IO'

export function requestTask(){
    return {
    type: REQUEST_TASK,
    }
}

export function requestAddTask(task){
    return {
        type: REQUEST_ADD_TASK,
        payload:{
            task
        }
    }
}

export function addTaskSocketIo(task){
    return{
        type: ADD_TASK_SOCKET_IO,
        payload:{
            task
        }
    }
}

export function requestEdiTask(task){
    return {
        type: REQUEST_EDIT_TASK,
        payload:{
            task
        }
    }
}

