import React from 'react'

const TogglerComp = ({toggler}) => {
    console.log("Toggler components");
  return (
    <div>
        Toggler = {toggler.toString()}
    </div>
  )
}

//export default TogglerComp
 export default React.memo(TogglerComp)