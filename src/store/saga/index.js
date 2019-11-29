import { all, takeLeading  } from 'redux-saga/effects';
import { getProjects, addProject, editProject, deleteProject } from './projects'
import { getTask, addTask, editTask } from './tasks'
import { auth } from './auth'



export default function* rootSaga() {
  
  yield all([
    takeLeading('REQUEST_AUTH', auth ),
    takeLeading('REQUEST_PROJECTS', getProjects ),
    takeLeading('REQUEST_ADD_PROJECTS', addProject ),
    takeLeading('REQUEST_EDIT_PROJECTS', editProject ),
    takeLeading('REQUEST_DELETE_PROJECT', deleteProject ),
    takeLeading('REQUEST_TASK', getTask ),
    takeLeading('REQUEST_ADD_TASK', addTask ),
    takeLeading('REQUEST_EDIT_TASK', editTask ),
  ]);
}
