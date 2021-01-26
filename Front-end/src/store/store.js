import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import allReducers from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export {store, persistor}