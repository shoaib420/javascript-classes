import React from "react"
import Navber from "./component/Navber"


 export default function App() {
  return (
    <React.Fragment>
      <Navber name="hello my name is abdullah " city="karachi" />
      <Navber name="hello my name is zaheer " location={{age: "5", city: "lahore ", country: "pakistan " , zipCode:"8765433"}} />  
          <Navber name="hello my name is wasif  " />  
            <Navber  />      <Navber />
    </React.Fragment>
  )

}


