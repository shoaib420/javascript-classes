import React, {useEffect, useRef, useState} from 'react'

const Counter = () => {
    const [Number, setNumber] = useState(0)
    const [toggler, setToggler] = useState(false)

    const ref_input = useRef("hello_japs");
    console.log(ref_input)
    
    useEffect(()=>{
        // console.log("calling useEffect function ");
        // setInterval(() => {
        //     console.log("hello js ")
        // }, 1000);
        
        const fetchApi =async()=>{
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                const json = await res.json();
                console.log(json)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApi();
        ref_input.current.focus()

    },[])
  return (
    <div>
      <h1>{Number}</h1>
      <h2>{toggler.toString()}</h2>
      <button onClick={()=>{setNumber(Number + 1)}}>click me</button>
      <button onClick={()=>{setToggler(!toggler)}}>toggler</button>
      <br></br>
      <br></br>
      <br></br>
      <input type='text' ref={ref_input}
      onChange={()=> console.log(ref_input.current.value)} />

    </div>
  )
}

export default Counter
