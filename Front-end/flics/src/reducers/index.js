import authReducer from './isLogged'
import {groupReducer} from '../reducers/groupReducer'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { myListReducer } from './myListReducer';
import { reviewReducer } from './reviewReducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
  }

const allReducers = combineReducers({
    auth: authReducer,
    groups: groupReducer,
    favorites: myListReducer,
    reviews: reviewReducer
})

export default persistReducer(persistConfig, allReducers)