import { useState } from 'react'
import './App.css'
import Sandy from './Sandy'

function App() {
  const [users, setUsers] =useState(
    [
    {id: 1, name:"sandhiya",email:"sandhiya@gmail.com"},
    {id: 2, name:"Vicky",email:"vicky@gmail"},
    {id: 3, name:"Kavi",email:"kavi@gmail.com"},
    {id: 4, name:"dhiya",email:"dhiya@gmail.com"},
    {id: 4, name:"dhiya",email:"dhiya@gmail.com"},

  ])
  const [state, setState] =useState(0)
  const handeleClick =()=>{
    setState(state-1)
  }

  return (
    <>
    {/* Sandy name={"sandhiya"} age={20} />Sandy name={"siranth"} age={20}/>*/}
      <Sandy users={users} />
      {/*<div>{state}</div>
        <div onClick={handeleClic}>Increament</div>
        <button onClick={()=>setState(state-1)}>Decreament</button>*/}
    </>
  )
}

export default App
