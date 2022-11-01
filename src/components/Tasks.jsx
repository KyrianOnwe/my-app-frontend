import React from 'react'


function Tasks({ id, task, dd, ab, setT, status  }) {

  function completed(){
    fetch(`http://localhost:9292/todos/completed/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        completed: true,
        status: `Done-Completed.`
      }),
    })
    .then((r) => r.json())
    .then((data) => setT(data))
  }
  
  function handleDelete(){
    fetch(`http://localhost:9292/todos/${id}`,{method: "DELETE"})
      .then((r) => r.json())
      .then((data) => setT(data))
  }
  

  return (
    <tr>
      <td>
        {task}
      </td>
      <td>
        {dd}
      </td>
      <td>
        {ab}
      </td>
      <td>
        {status}       
      </td>

      <td><button onClick={completed}>Complete</button><button onClick={handleDelete}>Delete</button></td>
    </tr>

  )
}

export default Tasks