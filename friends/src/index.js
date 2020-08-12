import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

const FriendApp = () => {
    return (
       <Router>
          <div className="App">
            <ul>
              <li>
                <Link to = "/Login">Login</Link>
                <Link to ="/Friendlist">Friend's List</Link>
              </li>
            </ul>
            <Switch>
              <PrivateRoute exact path ="/FriendList" component={FriendList} />
              <Route path="/Login" component={Login} />
              <Route component={Login} />
            </Switch>
          </div>
        </Router>
    );
  }

ReactDOM.render(
    <Router.StrictMode>
        <FriendApp />
    </Router.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
