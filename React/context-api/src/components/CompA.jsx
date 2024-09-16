// import React from 'react'
// import CompB from './CompB'

// const CompA = ({name}) => {
//   return (
//     <div>
//         <CompB name={name} />
//     </div>
//   )
// }

// export default CompA

import React from 'react'
import CompB from './CompB'

const CompA = () => {
  return (
    <div className='header'>
    <div className='container'>
    <div className='flex nav'>
      <div className='logo'>
        <h1>Japs</h1>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Service</li>
          <li>Admin</li>
        </ul>
      </div>
    </div>

    </div>
    
        {/* <CompB  /> */}
    </div>
  )
}

export default CompA