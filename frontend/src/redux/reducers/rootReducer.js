import { combineReducers } from 'redux'
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import { historyReducer } from './historyReducer'

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  history: historyReducer,
})

export default rootReducer
