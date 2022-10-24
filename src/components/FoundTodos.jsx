import React from 'react'

function FoundTodos({ task, dd, ass, stat }) {
  return (
    <tr>            
        <td>
            {task}
        </td>
        <td>
            {dd}
        </td>
        <td>
            {ass}
        </td>
        <td>
            {stat}                
        </td>      
    </tr>

 
  )
}

export default FoundTodos