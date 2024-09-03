import React from 'react'

const ButtonComp = ({title, click}) => {
  console.log("BUTTON COMP");
  return (
    <div>
        <button onClick={click}>{title}</button>
    </div>
  )
}

// export default ButtonComp
 export default React.memo(ButtonComp)