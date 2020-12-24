import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import allReducers from '../reducers'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store)

export {store, persistor}