import React from 'react'

const DisplayComp = ({counter}) => {
    console.log("display counter component");
  return (
    <div>
        <h4>
            Display counter  : {counter}
        </h4>
    </div>
  )
}

export default  DisplayComp
// export default React.memo(DisplayComp) 