import React, { useState } from 'react';

function MakeUser({ users, setusers }) {
    const [user, setUser] = useState({
        name: "",
        role: "",
        password: "Yoyoyo",
        email: "",        
    })

    function createUser(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value,
          });
    }

    function resetUserForm(){
        setUser({
            name: "",
            role: "",
            password: "Yoyoyo",
            email: "",        
        })
      }



    function submitUser(e){
        e.preventDefault()
        fetch(("http://localhost:9292/users/post"), {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then((r) => r.json())
        .then((data) => {
          setusers([...users, data])
          alert(`${data.name} has been added!`)})
        .then(() => resetUserForm())
    }

  return (
    <div>        
        <form className="tasks-holder" onSubmit={submitUser}>
            <input type="text" name="name" placeholder="User Name" value={user.name} onChange={createUser} />
            <input type="text" name="role" placeholder="User's Role" value={user.role} onChange={createUser} />
            <input type="text" name="email" placeholder="Email address" value={user.email} onChange={createUser} />
            <button type="submit">Done!</button>
        </form>
</div>
  )
}

export default MakeUser