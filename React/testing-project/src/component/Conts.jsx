import { useState } from "react"


const Counts = () => {
    const [Number , setNumber] = useState(0)
  return (
    <div>
    <h1>{Number}</h1>
    <button onClick={()=>{setNumber(Number + "hello javascript")}}> + </button>
    <button onClick={()=>{setNumber(Number - 1)}}> - </button>
    </div>
  )
}

export default Counts