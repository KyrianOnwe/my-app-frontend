import React from 'react'
import FoundTodosContainer from './FoundTodosContainer';
import Options from './Options';

function Search({ us, std, user, setUser, utodos, setUtodos  }) {

    
  function useSetUser(e){
    setUser(us.find((u) => u.name === e.target.value))
  }
  let list = []

 list = !utodos.todos ? [] : [...utodos.todos]

  function changeFoundTodos(info){
    let dropper = info
    delete dropper.user
    const uhold = {...utodos}
    const uholdT = uhold.todos
    const change = uholdT.filter((u) => u.id !== dropper.id)
    const changer = [...change, dropper]
    uhold.todos = changer    
    setUtodos(uhold)

  }

  function dump(id){ 
    const uhold = {...utodos}
    const uholdT = uhold.todos
    const change = uholdT.filter((u) => u.id !== id)
    uhold.todos = change
    setUtodos(uhold)
  }

  

  function subSearch(e){
    e.preventDefault()
    let id = user.id
    fetch(`http://localhost:9292/users/get_user_todos/${id}`)
       .then((r) => r.json())
       .then((s) => setUtodos(s))
  }


  

  
  return (
    <div>Search by user
        <form onSubmit={subSearch}>
          <select name="user" onChange={useSetUser} placeholder={user} value={user.name}>
            <Options us={us} />
          </select>
          <button type="submit">Click</button>
        </form>
        {utodos.length !== 0 ? <FoundTodosContainer ftds={list} us={us} setT={std} handD={dump} handC={changeFoundTodos} />:  "No Todos to show"  }
    </div>
  )
}

export default Search