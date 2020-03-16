import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddFriend = (props) => {

    const [addFriend, setAddFriend] = useState(
        {
           name: "",
           age: "",
           email: "",
           id: ""
        }
    )

    const handleChange =  e => {
        setAddFriend({...addFriend, [e.target.name]: e.target.value});
      };

 
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("/friends", addFriend)
        .then(res => {
                console.log(res)
        })
        .catch(err => { 
        console.log(err)})
    }


    return (
        <center>
        <div className="container login-container">
         
            <div className="row">
          
                <div className="col-md-12 login-form-1">
                  <p>  ADD FRIEND TO NETWORK</p>
                    <form onSubmit={handleSubmit}> 
                        <div className="form-group">
                            <input type="text" onChange={handleChange}  name="name" className="form-control" placeholder="Friend Name *" value={addFriend.name} />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={handleChange} name="age" className="form-control"  placeholder="Age *" value={addFriend.age} />
                        </div>
                        <div className="form-group">
                            <input type="email" onChange={handleChange} name="email" className="form-control"  placeholder="Email *" value={addFriend.email} />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={handleChange} name="id" className="form-control"  placeholder="Friend ID *" value={addFriend.id} />
                        </div>
                        <div className="form-group"><center>  <input type="submit" className="btnSubmit" value="Login" /></center>
                          
                        </div>
                    </form>
                </div>
            </div>
            </div>   {console.log(addFriend)}
    
            </center>
         
    )
}

export default AddFriend