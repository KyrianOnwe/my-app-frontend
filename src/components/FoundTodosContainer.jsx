import React from 'react'
import FoundTodos from './FoundTodos';


function FoundTodosContainer({ ftds }) {

  console.log(ftds)


  return (
    <div className='tasks-container'>
        <table>
          <thead>
            <tr>              
              <th>Tasks</th>
              <th>Due date</th>
              <th>Assigned by</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ftds.map((f) => <FoundTodos key={f.id} task={f.task} dd={f.due_date} ass={f.assigned} stat={f.status} />)}
          </tbody>
        </table>
    </div>
  )
}

export default FoundTodosContainer