import React from 'react'

function sandy({users}) {
  return (
    <>
    <div>
    {users.map((users) =>(
      <ol key={users.id}>
      <li>{users.name}</li>
      <li>{users.email}</li>
      </ol>
    ))}
    
    </div>

    </>
  )
}

export default sandy