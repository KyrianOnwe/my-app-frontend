import React, { useState } from 'react'
import FoundTodosContainer from './FoundTodosContainer';
import { useNavigate } from 'react-router-dom';

function Search({ show }) {

  const [user, setUser] = useState("")
  const [utodos, setUtodos] = useState([])
    
  function useSetUser(e){
    setUser(e.target.value)
  }

  function subSearch(e){
    console.log(user)
    e.preventDefault()
    console.log("ok")
    fetch(`http://localhost:9292/find_by_name/${user}`)
       .then((r) => r.json())
       .then((s) => setUtodos(s))

  }

  const hist = useNavigate()

  if (!show){
    hist('/')}


  return (
    <div>Search by user
        <form onSubmit={subSearch}>
          <input type="text" onChange={useSetUser} defaultValue={user}/>
          <button type="submit">Click</button>
        </form>
        {utodos.length === 0 ? "No Todos to show" : <FoundTodosContainer ftds={utodos}  />}
    </div>
  )
}

export default Search