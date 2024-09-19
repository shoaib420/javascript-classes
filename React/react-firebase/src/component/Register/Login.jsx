import './Login.css';
import React, { useState } from 'react'
import {auth} from '../../firebase/FirebaseConfig'
import { signInWithEmailAndPassword  } from "firebase/auth"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword ] = useState("")
  const navigate = useNavigate()

   const Login = async()=>{
    if(email === "" || password === ""){
      return alert("please fill the all fields")
    }
    try {
     const user = await signInWithEmailAndPassword(auth, email, password)
     const users = localStorage.setItem("user", JSON.stringify(user))
     alert("Login successfull")
     navigate("/")
     setEmail("");
     setPassword("")
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
           <h1>Login Page</h1>
           <div>
           
             <input 
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
             type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
            
             <input type="password" 
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
              placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button onClick={Login}>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="/signup">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;