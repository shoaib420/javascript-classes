import React, { useState } from "react"
// import Counter from './class-comp/counter'
// import Count from './class-comp/count'
import Number from './component/Conts';
import Form from './component/Form'
import Server from "./component/Server";

 export default function App() {
  // const [num, setNum] = useState(0);
  return (
    <React.Fragment>
   {/* <h1> {num } </h1>
  <button onClick={()=>{ setNum(num + 1)}}>click me</button> */}
  {/* <Counter /> */}
{/* <Count />  */}
  <Number />
  <Form />
  <Server />
    </React.Fragment>
  )

}


