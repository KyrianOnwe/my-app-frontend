import React from 'react'
import { Link } from 'react-router-dom'
import SignOut from './SignOut'
import { useNavigate } from 'react-router-dom';



function NavBar({ ss, scu, sss, cu }) {
  const jump = useNavigate('/')
  return (
    <>
        {ss ? <div id='navbar'>
        <ul>
          
            <li><Link to="/">Tasks</Link></li>
            <li><Link to="/search">Search</Link></li>
            {cu.role === "Owner"? <li><Link to="/newUser">Create a new user</Link></li> : jump}
        </ul> 
        <SignOut scu={scu} sss={sss} ss={ss} />
    </div> : null}
    </>
  )
}



export default NavBar
