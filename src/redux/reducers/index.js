import { combineReducers } from 'redux'
import students from './students'
import visibility from './visibility'

export default combineReducers({ students, visibility })