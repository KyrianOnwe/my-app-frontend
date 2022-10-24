import React from 'react'

function SignOut({ scu, sss, ss }) {
    function handleSignOut(){
        sss(!ss)
        scu("")
    }

  return (
    <button id="sign-out" onClick={handleSignOut} >Sign Out</button>
  )
}

export default SignOut