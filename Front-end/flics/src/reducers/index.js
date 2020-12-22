import authReducer from './isLogged'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
  }

const allReducers = combineReducers({
    auth: authReducer
})

export default persistReducer(persistConfig, allReducers)