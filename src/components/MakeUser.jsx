import React, { useState } from 'react'

function MakeUser() {
    const [user, setUser] = useState({
        name: "",
        role: "",
        user_id: "",
        password: "Yoyoyo",
        email: "",        
    })

  return (
    <div>MakeUser</div>
  )
}

export default MakeUser