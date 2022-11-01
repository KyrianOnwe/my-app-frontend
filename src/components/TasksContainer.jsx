import React from 'react'
import Tasks from "./Tasks";

function TasksContainer({ tds, us, setT }) {
  let shownList = []
  shownList = tds

   return (
    <div>
         <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Due date</th>
              <th>Assigned by</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>            
              {shownList.map((t) => <Tasks key={t.id} id={t.id} task={t.task} dd={t.due_date} ab={t.assigned_by} uid={t.user_id} status={t.status} us={us} setT={setT} />)}
          </tbody>
        </table>

    </div>
  )
}

export default TasksContainer