import React, { useState } from 'react';
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
        

        <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <form onSubmit={handleSubmit}> 
                        <div class="form-group">
                            <input type="text" onChange={handleChange}  name="username" class="form-control" placeholder="Login *" value={login.username} />
                        </div>
                        <div class="form-group">
                            <input type="password" onChange={handleChange} name="password" class="form-control"  placeholder="Password *" value={login.password} />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
            </div>
            </div>
    
  {     console.log(login)}
        </>
    )
}

export default Login