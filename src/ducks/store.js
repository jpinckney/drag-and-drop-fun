import { createStore, combineReducers } from 'redux'
import user from './userReducer'

export default createStore(user)