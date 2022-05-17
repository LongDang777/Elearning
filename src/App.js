import './App.css';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import "antd/dist/antd.css";
import {HomeTemplate} from './templates/HomeTemplate/HomeTemplate';
import { Admintemplate } from './templates/Admintemplate/Admintemplate';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>

          <HomeTemplate path='/' component={Home}/>
          <Admintemplate path='/admin' component={Admin}/>
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
