import {useRef, useState} from 'react'

const Form = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const passwordRef = useRef(null);
    const is_valid_form = Name !== "" && Email !=="";

    const onsubmit =(e)=>{
        e.preventDefault()
        console.log("event", event, {Name: Name, Email: Email, password:password});
    }
  return (
    <div style={{textAlign:"center", }}>
        <form onSubmit={onsubmit}>
         <div>
         <label>Name : </label>
         <input type="text" value={Name} onChange={(e)=> setName(e.target.value)} placeholder="inter your name " />
         </div>
         <div>
         <label>Email : </label>
         <input type="email" value={Email} onChange={(e)=> setEmail(e.target.value)} placeholder="inter your email " />
         </div>
         <div>
         <label>Password : </label>
         <input type="password" ref={passwordRef} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="inter your Password" />
         </div>
         <button disabled={!is_valid_form}>Submit</button>
        </form>
    </div>
  )
}

export default Form