import React from 'react';
import './App.css';

import PrivateRoute from './components/PrivateRoute'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';

function App() {
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

export default App;