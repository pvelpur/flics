import MainRouter from './MainRouter'
import {BrowserRouter as Router} from 'react-router-dom'
import { persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Router>
      <PersistGate persistor={persistor}>
        <MainRouter />
      </PersistGate>
    </Router>
  );
}

export default App;
