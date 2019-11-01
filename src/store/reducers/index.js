import { combineReducers, } from 'redux'

import auth from './auth'
import projects from './projects'
import modal from './modal'
import tasks from './tasks'

const reducers = combineReducers({
    auth,
    projects,
    modal,
    tasks,
})

export default reducers