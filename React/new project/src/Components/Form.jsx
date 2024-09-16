import React, { useRef, useState } from 'react'

const Form = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const PasswordInpRef = useRef(null)
    const is_FormValid = Name !=="" && Email !==""&& password !=="" ;
    const onsubmit = (event)=>{
        event.preventDefault()
        
        console.log("event",event , {Name: Name, Email: Email, password })
        // console.log("event",event , {Name: Name, Email: Email, password : PasswordInpRef.current?.value })
    }
    console.log('render', PasswordInpRef)
  return (
    <div>
         {/* controlled Components hai kyun k input ki jo value hai state handle ki hai */}
      <form onSubmit={onsubmit}>
        <div>
          <label>name</label>
          <input type='text' placeholder='please inter your name ' value={Name}
           onChange={(e)=> setName(e.target.value)}
            />
        </div>
        <div>
        <label>email</label>
          <input type='email' placeholder='please inter your email' value={Email}
           onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
        <label>password</label>
          <input type='password'
           placeholder='please inter your password' value={password} onChange={(e)=>setPassword(e.target.value)} ref={PasswordInpRef}
             />
        </div>
        <button disabled={!is_FormValid}> Submit</button>
      </form>
      
    </div>
  )
}

export default Form
