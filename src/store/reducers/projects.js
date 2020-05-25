import { combineReducers } from 'redux'
import { createReducer } from './util'

const selectedProject = createReducer({}, {
  'CREATE_PROJECT': (state, { project }) => project
})

export default combineReducers({
  selectedProject
})
