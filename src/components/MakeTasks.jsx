import React, { useState } from 'react'

const MakeTasks = ({ cu, us, std, todos, role }) => {
  const [newTask, setNewTask] = useState({
    task: "",
    due_date: "",
    user_id: "",
    status: "Assigned",
    completed: false,
    assigned_by: `${cu}`
  })

  function useSetNewTask(e){    
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  }

  function resetTaskAdder(){
    setNewTask({
      task: "",
      due_date: "",
      user_id: "",
      status: "Assigned, not started",
      completed: false,
      assigned_by: `${cu}`
    })
    console.log(todos)
  }

  function submitTask(e){
    e.preventDefault()
    const theTask = newTask
    let unit = us.find((u) => u.name === newTask.user_id)
    let unitId =  unit.id 
    theTask.user_id = unitId
    theTask.assigned_by = cu
    // console.log(theTask)
    fetch(("http://localhost:9292/todos"), {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(theTask)
    })
      .then((r) => r.json())
      .then((data) => std([...todos, data]))
      .then(() => resetTaskAdder())
  }


  return (
    <div className={role === "Owner"|| role === "Adminstrator"? "tasks-div":"hidden"}>
        <form className="tasks-holder" onSubmit={submitTask}>
            <input type="text" name="task" placeholder="Task" value={newTask.task} onChange={useSetNewTask} />
            <input type="text" name="due_date" placeholder="Due Date" value={newTask.due_date} onChange={useSetNewTask} />
            <input type="text" name="user_id" placeholder="Assigned to" value={newTask.user_id} onChange={useSetNewTask} />
            {/* <input type="text" name="assigned_by" placeholder="Assigned by" defaultValue={cu} /> */}
            <button type="submit">Done!</button>
        </form>
    </div>
  )
}
export default MakeTasks
