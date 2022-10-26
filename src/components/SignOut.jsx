import React from 'react';
import { useNavigate } from 'react-router-dom'

function SignOut({ scu, sss }) {
    const hist= useNavigate()

    function handleSignOut(){
        sss(false)
        scu("")
        hist('/')
        // setUser('')
        // setUtodos('')}

    }

  return (
    <button id="sign-out" onClick={handleSignOut} >Sign Out</button>
  )
}

export default SignOut