import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

const ProtecteRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
        return children
    }else{
        return <Navigate to={"/login"} />
    }
 
    
}

export default ProtecteRoute