import React from 'react'

function Child({onbuttonClick, name}) {
  const sentData=()=>{
    onbuttonClick("this message from child!!!")
  }
  return (
    // <div>
    // <input 
    // type="text"
    // onChange={(e)=>setState(e.target.value)}
    // />
    // </div>
    <div>
    <button onClick={sentData} className='btn btn-danger'>clicked</button>
    
    </div>
  )
}

export default Child