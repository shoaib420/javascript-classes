import React, { useState } from 'react'
import {auth} from '../../firebase/FirebaseConfig'
import {createUserWithEmailAndPassword  } from "firebase/auth"

const Signup = () => {
     const [email, setEmail] = useState("")
     const [password, setPassword ] = useState("")
    
 
      const signup = async()=>{
        if(email === "" || password === ""){
          return alert("please fill the all fields")
        }
       try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        alert("signup successfull")
       } catch (error) {
        console.log(error);
       }
      }
  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            

          </div>


        </div>
        <div>
          <h1>Signup Page</h1>
          <div>
          
            <input type="text" placeholder="user name"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
             className="name"/>
          </div>
          <div className="second-input">
           
            <input type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
             placeholder="user name" className="name"/>
          </div>
         <div className="login-button">
         <button onClick={signup}>Login</button>
         </div>
          
           <p className="link">
             <a href="#">Forgot password ?</a> Or<a href="/login">Login</a>
           </p>
          

        </div>
      </div>
      

    </div>
   </div>
  )
}

export default Signup