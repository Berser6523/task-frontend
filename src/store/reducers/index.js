import { combineReducers, } from 'redux'

import auth from './auth'
import projects from './projects'
import modal from './modal'

const reducers = combineReducers({
    auth,
    projects,
    modal
})

export default reducers