import React from 'react'

function Options({ us }) {
  return (
    <>
         <option value="nada" key="nadanada">Select a user</option>
         {us.map((u) => <option value={u.name} key={u.name}>{u.name}</option>)}
    </>
  )
}

export default Options