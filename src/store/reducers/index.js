import { combineReducers, } from 'redux'

import auth from './auth'
import projects from './projects'
import modal from './modal'
import modalTask from './Modaltasks'

const reducers = combineReducers({
    auth,
    projects,
    modal,
    modalTask
})

export default reducers