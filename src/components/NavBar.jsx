import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
    <>
        <div id='navbar'>
        <ul>
          
            <li><Link to="/">Tasks</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/newUser">Create a new user</Link></li> 
        </ul>
        
    </div>
    </>
  )
}



export default NavBar
