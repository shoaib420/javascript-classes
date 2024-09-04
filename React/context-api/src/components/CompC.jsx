// import React from 'react'

// const CompC = ({name}) => {
//   return (
//     <div> components c  
//     {name} </div>
//   )
// }

// export default CompC

// import React from 'react'
// import {data, data1 } from '../App'
// const CompC = () => {
//   return (
//     <div> components c 
//     {/* {name} */}

//   <data.Consumer>
//     {(name)=>{
//         return (
//             <data1.Consumer>
//                 {(gender)=>{
//                     return(
//                         <h1>hello my name is {name} and my gender is {gender}</h1>
//                     )
//                 }}
//             </data1.Consumer>
      
//         )
//     }}
//   </data.Consumer>
    
//     </div>
//   )
// }

// export default CompC

import React, { useContext } from 'react'
 import {data, data1 } from '../App'

const CompC = () => {
    const name = useContext(data)
    const gender = useContext(data1);
    console.log(name , gender);
  return (
    <div>
<h1>
 my name is {name} my gender is {gender}

</h1>
      </div>
  )
}

export default CompC