import React from 'react'


export const Logout = (props) => {
    localStorage.removeItem("token")
    window.location = "http://localhost:3000"
   
}

