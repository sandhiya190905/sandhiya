import { useState } from 'react'
import './App.css'
import Sandy from './Sandy'
import Child from './Child'

function App() {
  //const [users, setUsers] =useState(
   // [
   // {id: 1, name:"sandhiya",email:"sandhiya@gmail.com"},
   // {id: 2, name:"Vicky",email:"vicky@gmail"},
   // {id: 3, name:"Kavi",email:"kavi@gmail.com"},
    //{id: 4, name:"dhiya",email:"dhiya@gmail.com"},
   // {id: 4, name:"dhiya",email:"dhiya@gmail.com"},

  //])
  
  const [name, setName] =useState("")
  function handleClick(data){
    setName(data)
  }
  return (
    <>
        <div className="col-12 text-center mt-5">
        <Child onbuttonClick={handleClick} name={name}/>
        <h1>{name}</h1>
        </div>
    </>
  )
}

export default App

// <Sandy state={state}/>
        // <Child setState={setState}/>
//const [state, setState] =useState(0)
  //const handeleClick =()=>{
    //setState(state-1)
  //}
  // const [name, setName] = useState("")

  // function handleClick (){
  //   alert("call from event")
  // }

    // < Sandy name={"sandhiya"} age={20} />Sandy name={"siranth"} age={20}/>
    //   <Sandy users={users} />
    // <div>{state}</div>
    //     <div onClick={handeleClic}>Increament</div>
    //     <button onClick={()=>setState(state-1)}>Decreament</button>
    //     <button onClick={handleClick}>event trigger</button>
    //     <br />
    //     <input 
    //     type="text" 
    //     />