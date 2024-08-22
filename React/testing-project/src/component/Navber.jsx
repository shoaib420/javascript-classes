import React from 'react'
import "./index.css"

const Navber = (props) => {
    console.log("nav comp ", props);
  return (
    <React.Fragment>
        <h1 style={{backgroundColor:'blue', color: "white"}}>
            hello world 
        </h1>
        <p className='city'>
       {props.name} city {props.city}
        </p> 
        <p>
            {/* {props.location}  */}
        </p>
    </React.Fragment>
  )
}

export default Navber