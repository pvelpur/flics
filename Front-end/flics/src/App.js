import MainRouter from './MainRouter'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
