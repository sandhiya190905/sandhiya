import React, { useState } from "react";
import "./App.css"
function MyForm(){
    const [name,setName]=useState('');
    const [email,setemail]=useState('');
    const handleSubmit=(Event)=>{
        Event.preventDefault();
        alert('Name:${Name},Email:${email}');
    };
    return(
        <div className="tan">
        <form onSubmit={handleSubmit}>
        <lable>
        Name:
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </lable><br/>
        <lable>
        Email:
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </lable><br/>
<button type="submit">Submit</button>
        </form></div>
    );
}
export default MyForm;