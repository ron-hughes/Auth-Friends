import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Friends from './components/friends';
import PrivateRoute from './components/privateroute';

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
    <li> <Link to="/login">Login</Link> </li>
    <li><Link to="/friends">Friends</Link></li>
      </ul>
                  
<hr />
    
     </div>
     <Switch>
       <PrivateRoute exact path="/friends" component={Friends} />
       <Route path="/login" component={Login} />
       <Route component={Login} />
     </Switch>
   
    </Router>
    
  );
}

export default App;
