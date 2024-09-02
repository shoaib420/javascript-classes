import React, { useEffect, useRef } from 'react'

const Server = () => {
    const Inp_Ref = useRef("hello")
   
   
    useEffect(()=>{
       
        apis()
        Inp_Ref.current.focus()
     })
     const apis = async()=>{
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await res.json();
            console.log(json);
        } catch (error) {
console.log(error);
            
        }
    }
  
  return (
    <div>
<input type='text'  ref={Inp_Ref
} onChange={()=> console.log(Inp_Ref.current.value)} />
    </div>
  )
}

export default Server