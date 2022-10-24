import React, { useState } from 'react'


function Tasks({ id, task, dd, ab, status, us, uid, delT, role, comp, handcom, uui  }) {

  const [status2, setstatus2] = useState(status)
  function useSetStatus2(e){
    setstatus2(e.target.value)
  }
  
  const [compl, setCompl] = useState(comp)

  function useSetCompl(){
    setCompl(!comp)
    setstatus2("Done-finished!")
    completed()
  }

  function completed(){
    fetch(`http://localhost:9292/todos/completed/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        completed: `${compl}`,
        status: `${status2}`
      }),
    })
      .then((r) => r.json())
      .then((data) => handcom(id, data))
  }

  // const userName = us.map((u) => u.name)
  // let options = []
  // options = [...userName.map((un) => {
  //   return {value: un.toLowerCase(), label: un}
  // })]
  let setUser = {}
//   console.log(uid)
  // console.log(us)
  setUser = us.find((u) => u.id === uid) 
  // console.log(setUser.name)

  const userSet = setUser.name
  // console.log(userSet)


  const [assigned, setAssigned] = useState(`${userSet}`)

  function handleChange(e){
    setAssigned(e.target.value)
  }

  

  // function useSetAssigned(x){
  //   const daUser = us.find((u) => u.name === x)
  //   const daId = daUser.id
    
  // }

  function handleStatusSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:9292/todos/status/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: `${status2}`
      }),
    })
      .then((r) => r.json())
      .then((data) => handcom(id, data))
  }

  function handleSubmit(e) {
    e.preventDefault();
    const uid = us.find((u) => u.name.toLowerCase() === assigned.toLowerCase())
    const ans = uid.id
    fetch(`http://localhost:9292/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: `${ans}`
      }),
    })
      .then((r) => r.json())
      .then((ret) => handcom(id, ret));
  }

  function handleDelete(){
    fetch(`http://localhost:9292/todos/${id}`,{method: "DELETE"});
    delT(id)
  }
  

  return (
    <tr className={compl ? "complete" : null}>
      <td className='hidden'>{id}</td>
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
        <input type='text' onChange={useSetStatus2} name='status2' placeholder='status2' value={status2}/><button onClick={handleStatusSubmit}>Done</button>
      </td>
      {
        role === "Owner" || role === "Administrator" ? 
        <td >
          <input type='text' placeholder={assigned}value={assigned} onChange={handleChange} />
          <button onClick={handleSubmit}>
            Done
          </button>
        </td> 
        : null
      }

      <td><button onClick={useSetCompl}>Complete</button><button className={role === "Owner" || role === 
      "Administrator" ? "delete-btn" : "hidden"} onClick={handleDelete}>Delete</button></td>
    </tr>

  )
}

export default Tasks