import React, { useState } from 'react';
import Loader from "react-loader-spinner";
import "../styles/login.css";
import axios from 'axios';

const Login = (props) => {

    const [login, setLogin] = useState(
        {
            username: "",
            password: ""
        }
    )

    const handleChange =  e => {
        setLogin({...login, [e.target.name]: e.target.value});
      };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", login)
        .then( res => {
            // console.log(res.data.payload)

            localStorage.setItem("token", res.data.payload) // set token to local storage
            props.history.push("/friends"); 
        
        })
        .catch( err => {
            console.log(err)
        })

    }

    return (
        <>
         
      <center>
        <div className="container login-container">
         
            <div className="row">
          
                <div className="col-md-12 login-form-1">
                  <p>  LOGIN TO FRIENDS NETWORK </p>
                    <form onSubmit={handleSubmit}> 
                        <div className="form-group">
                            <input type="text" onChange={handleChange}  name="username" className="form-control" placeholder="Login *" value={login.username} />
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={handleChange} name="password" className="form-control"  placeholder="Password *" value={login.password} />
                        </div>
                        <div className="form-group"><center>  <input type="submit" className="btnSubmit" value="Login" /></center>
                          
                        </div>
                    </form>
                </div>
            </div>
            </div>
    
            </center>
        </>
    )
}

export default Login