import { all, takeLeading  } from 'redux-saga/effects';
import { getProjects, addProject, editProject } from './projects'
import { auth } from './auth'


export default function* rootSaga() {
  
  yield all([
    takeLeading('REQUEST_AUTH', auth ),
    takeLeading('REQUEST_PROJECTS', getProjects ),
    takeLeading('REQUEST_ADD_PROJECTS', addProject ),
    takeLeading('REQUEST_EDIT_PROJECTS', editProject ),
  ]);
}
