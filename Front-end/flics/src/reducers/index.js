import authReducer from './isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    auth: authReducer
})

export default allReducers