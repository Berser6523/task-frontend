const REQUEST_TASK = 'REQUEST_TASK'
const REQUEST_ADD_TASK = 'REQUEST_ADD_TASK'

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