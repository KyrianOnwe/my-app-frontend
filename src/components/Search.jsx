import React, { useState } from 'react'
import FoundTodosContainer from './FoundTodosContainer';
import Options from './Options';

function Search({ us }) {

  const [user, setUser] = useState("")
  const [utodos, setUtodos] = useState([])
    
  function useSetUser(e){
    setUser(e.target.value)
  }


  

  function subSearch(e){
    e.preventDefault()
    fetch(`http://localhost:9292/users/find_by/${user}`)
       .then((r) => r.json())
       .then((s) => setUtodos(s))

  }

  

  
  return (
    <div>Search by user
        <form onSubmit={subSearch}>
          <select name="user" onChange={useSetUser} placeholder={user} value={user}>
            <Options us={us} />
          </select>
          <button type="submit">Click</button>
        </form>
        {utodos.length === 0 ? "No Todos to show" : <FoundTodosContainer ftds={utodos}  />}
    </div>
  )
}

export default Search