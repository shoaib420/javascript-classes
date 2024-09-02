import React, { useState, useCallback } from "react"
// import Counter from './class-comp/counter'
// import Count from './class-comp/count'
// import Number from './component/Conts';
// import Form from './component/Form'
// import Server from "./component/Server";

import DisplayComp from "./call-back/DisplayComp"
import TogglerComp from "./call-back/TogglerComp"
import ButtonComp from "./call-back/ButtonComp"

 export default function App() {
  // const [num, setNum] = useState(0);
  const [counter, setCounter] = useState(0)
  const [toggler, setToggler] = useState(false);

  const HandleCounterChange = ()=>{
    setCounter(counter + 1 )
   }
  //  const HandleCounterChange = useCallback(()=>{
  //   setCounter(counter + 1 )
  //  },[counter])
  
  
   const HandleTogglerChange = ()=>{
    setToggler(!toggler)
   }
  //  const HandleTogglerChange = useCallback(()=>{
  //   setToggler(!toggler)
  //  },[toggler])
  return (
    <React.Fragment>
   {/* <h1> {num } </h1>
  <button onClick={()=>{ setNum(num + 1)}}>click me</button> */}
  {/* <Counter /> */}
{/* <Count />  */}
  {/* <Number />
  <Form />
  <Server /> */}
  <DisplayComp counter={counter} />
   <br />
   <TogglerComp toggler={toggler} />
   <br />
   <ButtonComp title="increment" click={HandleCounterChange} />
   <br></br>

<ButtonComp title="Change Toggler" click={HandleTogglerChange}  />
    </React.Fragment>
  )

}


