import React from 'react'
import { Link } from 'react-router-dom'
import SignOut from './SignOut'


function NavBar({ ss, scu, sss }) {
  return (
    <>
        {ss ? <div id='navbar'>
        <ul>
            <li><Link to="/">Tasks</Link></li>
            <li><Link to="/search">Search</Link></li>
        </ul> <SignOut scu={scu} sss={sss} ss={ss} />
    </div> : null}
    </>
  )
}



export default NavBar
