import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Friends from './components/friends';
import Navigation from './components/navigation';
import PrivateRoute from './components/privateroute';
import AddFriend from './components/addfriend';
import { Logout } from './components/logout';

function App(props) {
  return (
    <Router>
  
         <Navigation />      
<hr />

     <Switch>
       <PrivateRoute exact path="/friends" component={Friends} />
       <PrivateRoute exact path="/addfriend" component={AddFriend} />
       <Route path="/logout"  component={Logout} />
       <Route path="/login" component={Login} />
       <Route component={Login} />
     </Switch>
 
    </Router>
    
  
  );
}

export default App;
