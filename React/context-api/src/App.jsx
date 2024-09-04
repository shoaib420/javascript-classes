import React, { createContext } from 'react'
import CompA from './components/CompA'

 const data = createContext();
 const data1 = createContext();
const App = () => {
   const name  = "Wasif"
   const genders = "male";
  return (
    <div>
      <data.Provider value={name}> 
    <data1.Provider value={genders}> 
      <CompA  />
       </data1.Provider>
      </data.Provider> 
    </div>
  )
}

export default App
export {data , data1}
// // create ProviderId, consumer





















// import React from 'react'
// import CompA from './components/CompA'

// const App = () => {
//     const name = "Hello-japs"
//   return (
//     <div>
//       <CompA name={ name} />
//     </div>
//   )
// }

// export default App