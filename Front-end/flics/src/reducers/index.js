import authReducer from './isLogged'
import {groupReducer} from '../reducers/groupReducer'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { myListReducer } from './myListReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
  }

const allReducers = combineReducers({
    auth: authReducer,
    groups: groupReducer,
    favorites: myListReducer
})

export default persistReducer(persistConfig, allReducers)