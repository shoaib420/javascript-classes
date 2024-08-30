import { useState } from "react"


const Counts = () => {
    const [Number , setNumber] = useState(0)
    const [toggles , setToggles] = useState(false)
  return (
    <div>
    <h1>{Number}</h1>
    <button>{toggles.toString()}</button><br />
    <button onClick={()=>{setToggles(!toggles)}}>Toggles  </button>
    <button onClick={()=>{setNumber(Number + 1)}}> + </button>
    <button onClick={()=>{setNumber(Number - 1)}}> - </button>
    </div>
  )
}

export default Counts