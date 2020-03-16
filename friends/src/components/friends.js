import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
import '../styles/friend.css'


const Friends = () =>  {

    const [friends, setFriends] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        axiosWithAuth().get("/friends")
        .then( res => {
            // console.log(res.data)
            setFriends(res.data);
            setIsLoading(false);

        })
        .catch( err => {
            console.log(err);

        })
    }, [])


return (
    (isLoading ? <center>
    <div><Loader type="Puff" color="#204963" height="60" width="60" />
    <p>Loading Data</p> </div></center> : 
    <div className="friends">
    {friends.map(x => {
      return (
        <div id={x.id} className="friend">
          <h1>{x.name}</h1>
          <h2>{x.age}</h2>
          <p>{x.email}</p>
        </div>
      );
    })}
  </div> )
 
)

}

export default Friends