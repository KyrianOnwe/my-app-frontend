import React from 'react';

function SignOut({ scu, sss }) {
    function handleSignOut(){
        sss(false)
        scu({})
    }

  return (
    <button id="sign-out" onClick={handleSignOut} >Sign Out</button>
  )
}

export default SignOut