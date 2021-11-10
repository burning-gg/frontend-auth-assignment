import { combineReducers } from 'redux'
import alertReducer from './alertReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'

export default combineReducers({
  alertReducer,
  authReducer,
  userReducer,
})