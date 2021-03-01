import {combineReducers} from 'redux'
import userReducer from './userReducer'
import foodListReducer from './foodListReducer'

export default combineReducers({
    userReducer,
    foodListReducer
})