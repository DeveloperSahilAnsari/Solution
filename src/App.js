import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
