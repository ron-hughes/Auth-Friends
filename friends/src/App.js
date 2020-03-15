import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
      </ul>
<hr />
     <Switch>
       <Route path="/login" component={Login} />
       <Route component={Login} />
     </Switch>
     </div>
    </Router>
    
  );
}

export default App;
