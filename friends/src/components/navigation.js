import React from 'react';
import { Link } from 'react-router-dom';
import { Logout } from './logout';


const Navigation = (props) => {
  return (  
  <ul>
    <li><Link to="/login">Sign in</Link> </li>
  <li><Link to="/logout">Sign out</Link></li>
    <li><Link to="/friends">Friends</Link></li>
    <li><Link to="/addfriend">Add Friend</Link></li>
      </ul>     
  )
}

export default Navigation