import React from 'react'
import FoundTodos from './FoundTodos';


function FoundTodosContainer({ ftds, us, setT, handD, handC }) {
  return (
    <div className='tasks-container'>
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
            {ftds.map((f) => <FoundTodos key={f.id} id={f.id}task={f.task} dd={f.due_date} ab={f.assigned_by} status={f.status} us={us} setT={setT} tds={ftds} handD={handD} handC={handC} ftds={ftds}/>)}
          </tbody>
        </table>
    </div>
  )
}

export default FoundTodosContainer