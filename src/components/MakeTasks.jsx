import React, { useState } from 'react'
import Options from './Options';
import TasksContainer from './TasksContainer';

const MakeTasks = ({ us, std, tds, handD, handC, handM }) => {
  const [newTask, setNewTask] = useState({
    task: "",
    due_date: "",
    user_id: "",
    status: "Assigned",
    completed: false,
    assigned_by: ""
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
      assigned_by: ""
    })
  }

  function submitTask(e){
    e.preventDefault()    
    fetch(("http://localhost:9292/todos"), {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    })
      .then((r) => r.json())
      .then((data) => handM(data))
      .then(() => resetTaskAdder())
  }

  return (
    <div>
        <form className="tasks-holder" onSubmit={submitTask}>
            <input type="text" name="task" placeholder="Task" value={newTask.task} onChange={useSetNewTask} />
            <input type="text" name="due_date" placeholder="Due Date" value={newTask.due_date} onChange={useSetNewTask} />
            <label>
              <select name="user_id" value={newTask.user_id} onChange={useSetNewTask}>
                <Options us={us}/>
              </select>
            </label>
            <input type="text" name="assigned_by" placeholder="Assigner" value={newTask.assigned_by} onChange={useSetNewTask} />
            <button type="submit">Done!</button>
        </form>
        <TasksContainer tds={tds} us={us} setT={std} handD={handD} handC={handC} />
    </div>
  )
}
export default MakeTasks
