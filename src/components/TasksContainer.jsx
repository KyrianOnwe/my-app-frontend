import React from 'react'
import Tasks from "./Tasks";

function TasksContainer({ tds, show, us, setT, role, cu, uui, handcom }) {
  function handleDel(id){
    const del =  tds.filter((t) => t.id !== id)
    setT([...del])
  }

  let myList = []
  let shownList = []

  if(role === "Owner" || role === "Adminstrator"){
    shownList = [...tds]
  } else if(role === "none"){
    shownList = [...tds]
  } else {
    myList = tds.filter((t) => t.user_id === us.find((u) => u.name === cu).id)
    shownList = [...myList]
  }

  function handleUp(id, stat){
    const upd = tds.find((t) => t.id === id)
    upd.status = stat
  }

  return (
    <div className={!show ? "hidden" : "tasks-container"}>
         <table>
          <thead>
            <tr>
              <th className='hidden'>id</th>
              <th>Tasks</th>
              <th>Due date</th>
              <th>Assigned by</th>
              <th>Status</th>
              {role === "Owner" || role === "Administraor" ? <th >Assigned to</th> : null}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>            
              {shownList.map((t) => <Tasks key={t.id} id={t.id} task={t.task} dd={t.due_date} ab={t.assigned_by} status={t.status} uid={t.user_id} us={us} delT={handleDel} updT={handleUp} role={role} uui={uui} comp={t.complete} handcom={handcom} />)}
          </tbody>
        </table>

    </div>
  )
}

export default TasksContainer